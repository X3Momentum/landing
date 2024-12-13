import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const vertexShader = `
  uniform float uTime;
  uniform float uFadeIn;
  varying vec3 vPosition;
  varying float vRandomColor;
  
  void main() {
    vec3 pos = position;
    vPosition = position;
    float x = pos.x;
    float y = pos.y;
    float z = pos.z;
    
    // Generate a random value for color variation, constant over time.
    vRandomColor = fract(sin(dot(position.xyz, vec3(12.9898, 78.233, 45.164))) * 43758.5453);
    
    float timeScale = uTime * 0.1;
    float currentStrength = 0.15;
    
    // Calculate z-factor to amplify drift for distant particles.
    float zFactor = z + 5.0;
    
    // Apply drifting motion to x and y, influenced by position and time.
    x += sin(timeScale + y * 0.2) * currentStrength * zFactor;
    y += cos(timeScale + x * 0.2) * currentStrength * zFactor;
    
    // Add vertical drift based on horizontal position.
    y += sin(x * 0.1 + timeScale) * currentStrength * 2.0;
    
    // Create a layered swirl effect with two sine waves.
    // Layered swirl effect
    float swirl1 = sin(timeScale * 0.2 + length(vec2(x, y)) * 0.1);
    float swirl2 = cos(timeScale * 0.15 + length(vec2(x, y)) * 0.15);
    x += (swirl1 * 0.7 + swirl2 * 0.3) * currentStrength;
    y += (swirl1 * 0.3 + swirl2 * 0.7) * currentStrength;
    // Add subtle z-axis movement
    z += sin(timeScale * 0.5 + x * 0.1) * 0.1;
    
    vec4 mvPosition = modelViewMatrix * vec4(x, y, z, 1.0);
    // Reduced particle sizes by about half
    float size = mix(30.0, 60.0, smoothstep(-20.0, 20.0, y));
    gl_PointSize = size * (1.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`

const fragmentShader = `
  uniform float uTime;
  uniform float uFadeIn;
  varying vec3 vPosition;
  varying float vRandomColor;

  vec3 getGradientColor(float t) {
    // Logo gradient colors
    vec3 color1 = vec3(1.0, 0.11, 0.97);   // #FF1CF7 (pink)
    vec3 color2 = vec3(0.5, 0.15, 1.0);    // #7F27FF (purple)
    vec3 color3 = vec3(0.0, 0.76, 1.0);    // #00C3FF (blue)
    
    if (t < 0.5) {
      return mix(color1, color2, t * 2.0);
    } else {
      return mix(color2, color3, (t - 0.5) * 2.0);
    }
  }

  void main() {
    float dist = length(gl_PointCoord - vec2(0.5));
    if (dist > 0.5) discard;
    
    // Use the random value to pick a color from the gradient
    vec3 baseColor = getGradientColor(vRandomColor);
    
    // Add very subtle animation to the color
    float colorShift = sin(uTime * 0.2 + vRandomColor * 6.28) * 0.1 + 0.9;
    vec3 finalColor = baseColor * colorShift;
    
    float alpha = 1.0 - (dist * dist);
    // Subtle pulse effect
    alpha *= 0.8 + sin(uTime + vRandomColor * 6.28) * 0.2;
    
    // Apply fade in effect
    alpha *= smoothstep(0.0, 1.0, uFadeIn - vRandomColor * 0.5);
    
    gl_FragColor = vec4(finalColor, alpha * 0.75); // Adjusted opacity for medium-sized particles
  }
`

export const Background = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    if (!containerRef.current) return
    
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x08091c)
    
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: false,
    })
    
    renderer.setSize(window.innerWidth, window.innerHeight)
    containerRef.current.appendChild(renderer.domElement)
    
    camera.position.z = 25
    
    const particleCount = 2800 // Reduced count since particles are much larger
    const positions = new Float32Array(particleCount * 3)
    
    // Enhanced distribution across the viewport
    const aspectRatio = window.innerWidth / window.innerHeight
    const width = 65 * aspectRatio  // Much wider spread
    const height = 55               // Taller spread
    const depth = 20               // More depth variation
    
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3
      
      // Create layers with different densities
      const layer = Math.random()
      if (layer < 0.3) {
        // Dense center layer
        positions[i3] = (Math.random() - 0.5) * width * 0.6
        positions[i3 + 1] = (Math.random() - 0.5) * height * 0.8
        positions[i3 + 2] = (Math.random() - 0.5) * depth * 0.6
      } else if (layer < 0.7) {
        // Medium spread layer
        positions[i3] = (Math.random() - 0.5) * width * 0.85
        positions[i3 + 1] = (Math.random() - 0.5) * height * 0.9
        positions[i3 + 2] = (Math.random() - 0.5) * depth * 0.8
      } else {
        // Wide spread layer
        positions[i3] = (Math.random() - 0.5) * width
        positions[i3 + 1] = (Math.random() - 0.5) * height
        positions[i3 + 2] = (Math.random() - 0.5) * depth
      }
      
      // Add some clustering near the edges
      const edgeCluster = Math.random()
      if (edgeCluster > 0.8) {
        const side = Math.random() > 0.5 ? 1 : -1
        positions[i3] = (Math.random() * 0.2 + 0.8) * width * 0.5 * side
      }
    }
    
    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uFadeIn: { value: 0 },
      },
      vertexShader,
      fragmentShader,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })
    
    const particles = new THREE.Points(geometry, material)
    scene.add(particles)
    
    let time = 0
    const fadeInDuration = 2.0 // Duration in seconds
    const startTime = performance.now()
    
    const animate = () => {
      const now = performance.now()
      const elapsed = (now - startTime) / 1000 // Convert to seconds
      time += 0.01
      
      // Calculate fade in progress
      const fadeProgress = Math.min(elapsed / fadeInDuration, 1.0)
      material.uniforms.uFadeIn.value = fadeProgress
      material.uniforms.uTime.value = time
      
      // Subtle camera movement
      camera.position.x = Math.sin(time * 0.1) * 1.5
      camera.position.y = Math.cos(time * 0.15) * 1.5
      camera.lookAt(scene.position)
      
      renderer.render(scene, camera)
      requestAnimationFrame(animate)
    }
    animate()
    
    const handleResize = () => {
      const newAspectRatio = window.innerWidth / window.innerHeight
      camera.aspect = newAspectRatio
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
      
      // Update particle positions on resize
      const newWidth = 65 * newAspectRatio
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3
        const layer = Math.random()
        if (layer < 0.3) {
          positions[i3] = (Math.random() - 0.5) * newWidth * 0.6
          positions[i3 + 1] = (Math.random() - 0.5) * height * 0.8
        } else if (layer < 0.7) {
          positions[i3] = (Math.random() - 0.5) * newWidth * 0.85
          positions[i3 + 1] = (Math.random() - 0.5) * height * 0.9
        } else {
          positions[i3] = (Math.random() - 0.5) * newWidth
          positions[i3 + 1] = (Math.random() - 0.5) * height
        }
        
        // Maintain edge clustering
        const edgeCluster = Math.random()
        if (edgeCluster > 0.8) {
          const side = Math.random() > 0.5 ? 1 : -1
          positions[i3] = (Math.random() * 0.2 + 0.8) * newWidth * 0.5 * side
        }
      }
      geometry.attributes.position.needsUpdate = true
    }
    
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('resize', handleResize)
      containerRef.current?.removeChild(renderer.domElement)
      geometry.dispose()
      material.dispose()
    }
  }, [])
  
  return <div ref={containerRef} className="fixed top-0 left-0 w-full h-full -z-10" />
} 
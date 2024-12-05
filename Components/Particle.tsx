import { useEffect, useMemo, useState } from "react";
import Particles from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim"; // Import slim particles package
import { initParticlesEngine } from "@tsparticles/react"; // Ensure you are importing this

const Particle = () => {
  const [init, setInit] = useState(false); // State to track if particles are initialized

  // Initialize particles engine once when the component mounts
  useEffect(() => {
    const initializeParticles = async () => {
      try {
        // Initialize engine and load slim configuration using the provided function
        await initParticlesEngine(async (engine) => {
          await loadSlim(engine); // Load slim configuration
        });
        setInit(true); // Set state to true once particles are initialized
      } catch (error) {
        console.error("Error initializing particles engine", error);
      }
    };

    initializeParticles(); // Run the initialization function
  }, []);

  // Callback when particles are loaded
  const particlesLoaded = async (container?: Container) => {
    console.log("Particles loaded: ", container); // You can handle the container if needed
  };

  // Particle options (using useMemo to prevent recalculation on each render)
  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "#2a2f37", // Background color for particles
        },
      },
      fpsLimit: 120, // Frame per second limit for performance
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push", // Mode for interaction on click
          },
          onHover: {
            enable: true,
            mode: "repulse", // Mode for interaction on hover
          },
        },
        modes: {
          push: {
            quantity: 4, // Number of particles to push on click
          },
          repulse: {
            distance: 200,
            duration: 0.4, // Repulsion distance and duration
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff", // Particle color
        },
        links: {
          color: "#ffffff", // Link color
          distance: 120, // Distance for links between particles
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: MoveDirection.none, // Particles move in any direction
          enable: true,
          outModes: {
            default: OutMode.out, // Default behavior when particles go out of bounds
          },
          random: false,
          speed: 4, // Speed of particle movement
          straight: false,
        },
        number: {
          density: {
            enable: true, // Enable density (keep particles evenly distributed)
          },
          value: 60, // Number of particles
        },
        opacity: {
          value: 0.5, // Particle opacity
        },
        shape: {
          type: "circle", // Shape of the particles
        },
        size: {
          value: { min: 2, max: 5 }, // Particle size range
        },
      },
      detectRetina: true, // Enable retina display support
    }),
    [],
  );

  // Return loading message if particles are not initialized yet
  if (!init) {
    return <div>Loading particles...</div>; // Show loading message or spinner
  }

  // Once initialized, render the Particles component
  return (
    <Particles
      id="tsparticles"
      options={options} // Apply the particle options
      particlesLoaded={particlesLoaded} // Callback after particles are loaded
    />
  );
};

export default Particle;

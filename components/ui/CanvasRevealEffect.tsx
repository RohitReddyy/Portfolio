"use client";
import { cn } from "@/lib/utils";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { useMemo, useRef } from "react";
import * as THREE from "three";

export const CanvasRevealEffect = ({
  animationSpeed = 0.4,
  opacities = [0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1],
  colors = [[0, 255, 255]],
  containerClassName,
  dotSize,
  showGradient = true,
}: {
  animationSpeed?: number;
  opacities?: number[];
  colors?: number[][];
  containerClassName?: string;
  dotSize?: number;
  showGradient?: boolean;
}) => {
  return (
    <div className={cn("h-full relative bg-white w-full", containerClassName)}>
      <div className="h-full w-full">
        <Canvas>
          <DotMatrix
            colors={colors ?? [[0, 255, 255]]}
            dotSize={dotSize ?? 3}
            opacities={
              opacities ?? [0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1]
            }
            shader={`float animation_speed_factor = ${animationSpeed.toFixed(
              1
            )};`}
            center={["x", "y"]}
          />
        </Canvas>
      </div>
      {showGradient && (
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-[84%]" />
      )}
    </div>
  );
};

interface DotMatrixProps {
  colors?: number[][];
  opacities?: number[];
  totalSize?: number;
  dotSize?: number;
  shader?: string;
  center?: ("x" | "y")[];
}

const DotMatrix: React.FC<DotMatrixProps> = ({
  colors = [[0, 0, 0]],
  opacities = [0.04, 0.04, 0.04, 0.04, 0.04, 0.08, 0.08, 0.08, 0.08, 0.14],
  totalSize = 4,
  dotSize = 2,
  // shader = "",
  // center = ["x", "y"],
}) => {
  const uniforms = useMemo(() => {
    const colorsArray = colors.map((color) => [
      color[0] / 255,
      color[1] / 255,
      color[2] / 255,
    ]);

    return {
      u_colors: {
        value: colorsArray,
        type: "uniform3fv",
      },
      u_opacities: {
        value: opacities,
        type: "uniform1fv",
      },
      u_total_size: {
        value: totalSize,
        type: "uniform1f",
      },
      u_dot_size: {
        value: dotSize,
        type: "uniform1f",
      },
    };
  }, [colors, opacities, totalSize, dotSize]);

  return (
    <ShaderMaterial
      source={`
        precision mediump float;
        uniform float u_time;
        uniform float u_opacities[10];
        uniform vec3 u_colors[6];
        uniform float u_total_size;
        uniform float u_dot_size;
        uniform vec2 u_resolution;
        out vec4 fragColor;
        float random(vec2 xy) {
            return fract(sin(dot(xy, vec2(12.9898,78.233))) * 43758.5453);
        }
        void main() {
            vec3 color = u_colors[int(random(vec2(1.0)) * 6.0)];
            fragColor = vec4(color, 1.0);
        }
      `}
      uniforms={uniforms}
      maxFps={60}
    />
  );
};

type Uniforms = {
  [key: string]: {
    value: number[] | number[][] | number;
    type: string;
  };
};

const ShaderMaterial = ({
  source,
  uniforms,
  maxFps = 60,
}: {
  source: string;
  maxFps?: number;
  uniforms: Uniforms;
}) => {
  // const { size } = useThree();
  const ref = useRef<THREE.Mesh | null>(null);
  let lastFrameTime = 0;

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const timestamp = clock.getElapsedTime();
    if (timestamp - lastFrameTime < 1 / maxFps) return;
    lastFrameTime = timestamp;

    const material = ref.current.material as THREE.ShaderMaterial;
    if (material.uniforms.u_time)
      material.uniforms.u_time.value = timestamp;
  });

  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      vertexShader: `
        in vec2 coordinates;
        void main() { gl_Position = vec4(position, 1.0); }
      `,
      fragmentShader: source,
      uniforms: uniforms,
    });
  }, [source, uniforms]);

  return (
    <mesh ref={ref}>
      <planeGeometry args={[2, 2]} />
      <primitive object={material} attach="material" />
    </mesh>
  );
};

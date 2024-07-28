import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export function Box({ isMobile }) {
	const { nodes, materials } = useGLTF('/care-box.glb');
	return (
		<group dispose={null}>
			<group position={[0, -0.5, 1]} rotation={[-1.38, 0.85, 2.9]}>
				<group scale={isMobile ? 0.15 : 0.18}>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Box001_1.geometry}
						material={materials.M_13___Default}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Box001_2.geometry}
						material={materials.left}
					/>
				</group>
			</group>
			<group position={[0, -0.5, 1]} rotation={[-1.38, 0.85, 2.9]}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Object001.geometry}
					material={materials.leftz}
					scale={isMobile ? 0.15 : 0.18}
				/>
			</group>
			<group position={[0, -0.5, 1]} rotation={[-1.38, 0.85, 2.9]}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Object002.geometry}
					material={materials.M_24___Defaultdxss}
					scale={isMobile ? 0.15 : 0.18}
				/>
			</group>
			<group position={[0, -0.5, 1]} rotation={[-1.38, 0.85, 2.9]}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Object003.geometry}
					material={materials.M_24___Default}
					scale={isMobile ? 0.15 : 0.18}
				/>
			</group>
			<group position={[0, -0.5, 1]} rotation={[-1.38, 0.85, 2.9]}>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Object004.geometry}
					material={materials.M_13___Default}
					scale={isMobile ? 0.15 : 0.18}
				/>
			</group>
		</group>
	);
}

useGLTF.preload('/care-box.glb');

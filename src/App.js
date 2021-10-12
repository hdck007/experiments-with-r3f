import { Suspense, useState } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, Plane, Sky } from '@react-three/drei';
import { Html, useProgress } from '@react-three/drei';
import { Shadow } from '@react-three/drei';

function Box() {
	const [hovered, setHovered] = useState(true);

	useThree(({ camera }) => {
		camera.position.set(0, 2, 5);
		camera.rotation.set(1, 1, 0);
	});

	return (
		<mesh
			castShadow={true}
			receiveShadow={true}
			onPointerEnter={() => setHovered((prev) => !prev)}
			onPointerOut={() => setHovered((prev) => !prev)}
			// position={[0, 0, 0]} // x, y, z
			rotation={[0, -2, 0]}
		>
			<boxGeometry />
			<meshStandardMaterial color={hovered ? 'yellow' : 'hotpink'} />
		</mesh>
	);
}

function App() {
	return (
		<div id='canvas-container'>
			<Canvas
				shadows
				style={{
					background: '#7ad4fa',
				}}
			>
				<OrbitControls />
				<directionalLight castShadow position={[-4, 3, 3]} />
				{/* <ambientLight intensity={0.1} /> */}
				<fog attach='fog' args={['#75d2fa', 1, 20]} />
				<Plane
					receiveShadow={true}
					args={[1000, 1000]}
					rotation={[-Math.PI / 2, 0, 0]}
					position={[0, -0.5, 0]}
				>
					<meshStandardMaterial color='green' />
				</Plane>
				<Box />
			</Canvas>
		</div>
	);
}

export default App;

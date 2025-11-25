import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = {
	width: 1200,
	height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
	const { width, height } = size;
	return new ImageResponse(
		(
			<div
				style={{
					height,
					width,
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'flex-start',
					background: 'linear-gradient(135deg, #0EA5E9 0%, #0369A1 100%)',
					color: 'white',
					padding: '56px',
					fontFamily: 'Inter, system-ui, sans-serif',
				}}
			>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						gap: 16,
						opacity: 0.95,
					}}
				>
					<div
						style={{
							width: 60,
							height: 60,
							borderRadius: 999,
							background: 'white',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							color: '#0EA5E9',
							fontWeight: 800,
							fontSize: 32,
						}}
					>
						N
					</div>
					<div style={{ fontSize: 32, fontWeight: 700 }}>NearbyBizFinder</div>
				</div>
				<div
					style={{
						marginTop: 18,
						fontSize: 56,
						fontWeight: 800,
						lineHeight: 1.1,
						maxWidth: 980,
					}}
				>
					Find Local Businesses You’ll Love
				</div>
				<div style={{ marginTop: 14, fontSize: 24, opacity: 0.9 }}>
					Browse categories, read reviews, and connect fast
				</div>
				<div style={{ marginTop: 'auto', fontSize: 22, opacity: 0.9 }}>
					nearbybizfinder.com
				</div>
			</div>
		),
		{
			...size,
		}
	);
}




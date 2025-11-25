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
					background: 'linear-gradient(135deg, #1D4ED8 0%, #1E40AF 100%)',
					color: 'white',
					padding: '64px',
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
					{/* Simple circle logo */}
					<div
						style={{
							width: 72,
							height: 72,
							borderRadius: 999,
							background: 'white',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							color: '#1D4ED8',
							fontWeight: 800,
							fontSize: 36,
						}}
					>
						N
					</div>
					<div style={{ fontSize: 36, fontWeight: 700 }}>NearbyBizFinder</div>
				</div>
				<div
					style={{
						marginTop: 24,
						fontSize: 64,
						fontWeight: 800,
						lineHeight: 1.1,
						maxWidth: 980,
					}}
				>
					Discover Local Businesses Near You
				</div>
				<div style={{ marginTop: 16, fontSize: 28, opacity: 0.9 }}>
					Search restaurants, shops, and services across the US
				</div>
				<div style={{ marginTop: 'auto', fontSize: 24, opacity: 0.9 }}>
					nearbybizfinder.com
				</div>
			</div>
		),
		{
			...size,
		}
	);
}




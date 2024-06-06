'use client';
/* eslint-disable @next/next/no-img-element */
import {
	DecorationContent,
	DecorationTop,
	DecorationLeftTop,
	DecorationLeftBottom,
	DecorationRightTop,
	DecorationRightBottom,
	DecorationA,
	DecorationB,
	DecorationC,
	DecorationD
} from './style';
export default function DecorationBorder() {
	return (
		<DecorationContent>
			<div>
				<DecorationTop />
				<DecorationLeftTop />
				<DecorationLeftBottom />
				<DecorationRightTop />
				<DecorationRightBottom />
				<DecorationA>
					<img src='https://nodeguardians.io/assets/containers/ornamented-corner.svg' alt='Decoration Corner Icon' />
				</DecorationA>
				<DecorationB>
					<img src='https://nodeguardians.io/assets/containers/ornamented-corner.svg' alt='Decoration Corner Icon' />
				</DecorationB>
				<DecorationC>
					<img src='https://nodeguardians.io/assets/containers/ornamented-corner.svg' alt='Decoration Corner Icon' />
				</DecorationC>
				<DecorationD>
					<img src='https://nodeguardians.io/assets/containers/ornamented-corner.svg' alt='Decoration Corner Icon' />
				</DecorationD>
			</div>
		</DecorationContent>
	);
}

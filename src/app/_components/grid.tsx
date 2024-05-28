"use client";

import * as React from "react";

import Blocks from "./blocks";
import { useWindowSize } from "../_hooks/useWindowSize";

export default function App() {
	const [totalBlocks, setTotalBlocks] = React.useState(0);
	const [multiWidth] = React.useState(false);
	const size = useWindowSize();

	React.useLayoutEffect(() => {
		setTotalBlocks(20);
	}, []);

	const width = size[0] as number;
	const rowSize = Math.floor(width / 132);

	return (
		<div className="w-full m-auto">
			<Blocks
				key={`${rowSize}-${multiWidth}-${totalBlocks}`}
				rowSize={rowSize}
				multiWidth={multiWidth}
				totalBlocks={totalBlocks}
			/>
		</div>
	);
}
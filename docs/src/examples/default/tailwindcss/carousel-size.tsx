import { Card, CardContent } from "@repo/tailwindcss/default/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@repo/tailwindcss/default/carousel";
import { Index } from "solid-js";

const CarouselSize = () => {
	return (
		<Carousel
			opts={{
				align: "start",
			}}
			class="w-full max-w-sm"
		>
			<CarouselContent>
				<Index each={Array.from({ length: 5 })}>
					{(_, index) => (
						<CarouselItem class="md:basis-1/2 lg:basis-1/3">
							<div class="p-1">
								<Card>
									<CardContent class="flex aspect-square items-center justify-center p-6">
										<span class="text-3xl font-semibold">{index + 1}</span>
									</CardContent>
								</Card>
							</div>
						</CarouselItem>
					)}
				</Index>
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	);
};

export default CarouselSize;

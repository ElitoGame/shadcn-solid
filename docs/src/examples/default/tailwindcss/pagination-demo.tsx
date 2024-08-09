import {
	Pagination,
	PaginationEllipsis,
	PaginationItem,
	PaginationItems,
	PaginationNext,
	PaginationPrevious,
} from "@repo/tailwindcss/default/pagination";

const PaginationDemo = () => {
	return (
		<Pagination
			fixedItems
			count={10}
			itemComponent={(props) => (
				<PaginationItem page={props.page}>{props.page}</PaginationItem>
			)}
			ellipsisComponent={() => <PaginationEllipsis />}
		>
			<PaginationPrevious />
			<PaginationItems />
			<PaginationNext />
		</Pagination>
	);
};

export default PaginationDemo;

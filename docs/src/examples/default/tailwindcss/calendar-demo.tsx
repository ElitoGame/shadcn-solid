import {
	DatePicker,
	DatePickerContext,
	DatePickerRangeText,
	DatePickerTable,
	DatePickerTableBody,
	DatePickerTableCell,
	DatePickerTableCellTrigger,
	DatePickerTableHead,
	DatePickerTableHeader,
	DatePickerTableRow,
	DatePickerView,
	DatePickerViewControl,
	DatePickerViewTrigger,
} from "@repo/tailwindcss/default/date-picker";
import { For } from "solid-js";

const CalendarDemo = () => {
	return (
		<DatePicker open closeOnSelect={false}>
			<div class="rounded-md border bg-popover p-3 text-popover-foreground">
				<DatePickerView view="day">
					<DatePickerContext>
						{(api) => (
							<>
								<DatePickerViewControl>
									<DatePickerViewTrigger>
										<DatePickerRangeText />
									</DatePickerViewTrigger>
								</DatePickerViewControl>
								<DatePickerTable>
									<DatePickerTableHead>
										<DatePickerTableRow>
											<For each={api().weekDays}>
												{(weekDay) => (
													<DatePickerTableHeader>
														{weekDay.short}
													</DatePickerTableHeader>
												)}
											</For>
										</DatePickerTableRow>
									</DatePickerTableHead>
									<DatePickerTableBody>
										<For each={api().weeks}>
											{(week) => (
												<DatePickerTableRow>
													<For each={week}>
														{(day) => (
															<DatePickerTableCell value={day}>
																<DatePickerTableCellTrigger>
																	{day.day}
																</DatePickerTableCellTrigger>
															</DatePickerTableCell>
														)}
													</For>
												</DatePickerTableRow>
											)}
										</For>
									</DatePickerTableBody>
								</DatePickerTable>
							</>
						)}
					</DatePickerContext>
				</DatePickerView>
				<DatePickerView
					view="month"
					class="w-[calc(var(--preference-width)-(0.75rem*2))]"
				>
					<DatePickerContext>
						{(api) => (
							<>
								<DatePickerViewControl>
									<DatePickerViewTrigger>
										<DatePickerRangeText />
									</DatePickerViewTrigger>
								</DatePickerViewControl>
								<DatePickerTable>
									<DatePickerTableBody>
										<For
											each={api().getMonthsGrid({
												columns: 4,
												format: "short",
											})}
										>
											{(months) => (
												<DatePickerTableRow>
													<For each={months}>
														{(month) => (
															<DatePickerTableCell value={month.value}>
																<DatePickerTableCellTrigger>
																	{month.label}
																</DatePickerTableCellTrigger>
															</DatePickerTableCell>
														)}
													</For>
												</DatePickerTableRow>
											)}
										</For>
									</DatePickerTableBody>
								</DatePickerTable>
							</>
						)}
					</DatePickerContext>
				</DatePickerView>
				<DatePickerView
					view="year"
					class="w-[calc(var(--preference-width)-(0.75rem*2))]"
				>
					<DatePickerContext>
						{(api) => (
							<>
								<DatePickerViewControl>
									<DatePickerViewTrigger>
										<DatePickerRangeText />
									</DatePickerViewTrigger>
								</DatePickerViewControl>
								<DatePickerTable>
									<DatePickerTableBody>
										<For
											each={api().getYearsGrid({
												columns: 4,
											})}
										>
											{(years) => (
												<DatePickerTableRow>
													<For each={years}>
														{(year) => (
															<DatePickerTableCell value={year.value}>
																<DatePickerTableCellTrigger>
																	{year.label}
																</DatePickerTableCellTrigger>
															</DatePickerTableCell>
														)}
													</For>
												</DatePickerTableRow>
											)}
										</For>
									</DatePickerTableBody>
								</DatePickerTable>
							</>
						)}
					</DatePickerContext>
				</DatePickerView>
			</div>
		</DatePicker>
	);
};

export default CalendarDemo;

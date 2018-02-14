import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-day-picker/lib/style.css";
import "./_calendar.scss";

import React, { Component } from "react";
import DayPicker from "react-day-picker";

import MediaQuery from "react-responsive";
import BigCalendar from "react-big-calendar";
import moment from "moment";

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[2]);
BigCalendar.momentLocalizer(moment);

export default class Calendar extends Component {
	render() {
		const events = [
			{
				id: 0,
				title: "Meeting with Dan Smith",
				start: new Date(2015, 11, 31, 15, 0, 0),
				end: new Date(2015, 11, 31, 17, 0, 0)
			},
			{
				id: 1,
				title: "Team meeting",
				start: new Date(2016, 0, 2, 12, 0, 0),
				end: new Date(2016, 0, 2, 15, 0, 0)
			},

			{
				id: 2,
				title: "Show guys how to live their lifes",
				start: new Date(2016, 0, 2, 18, 0, 0),
				end: new Date(2016, 0, 2, 20, 0, 0)
			},

			{
				id: 3,
				title: "New website presentation",
				start: new Date(2016, 0, 8, 14, 0, 0),
				end: new Date(2016, 0, 8, 18, 0, 0)
			},

			{
				id: 4,
				title: "Meeting with Google CEO",
				start: new Date(2016, 0, 16, 9, 0, 0),
				end: new Date(2016, 0, 16, 17, 0, 0)
			},
			{
				id: 5,
				title: "Annual Report",
				start: new Date(2016, 0, 19, 12, 0, 0),
				end: new Date(2016, 0, 19, 13, 0, 0)
			},
			{
				id: 6,
				title: "Team meeting",
				start: new Date(2016, 0, 21, 12, 0, 0),
				end: new Date(2016, 0, 21, 15, 0, 0)
			},
			{
				id: 7,
				title: "Call to John",
				start: new Date(2016, 0, 21, 18, 0, 0),
				end: new Date(2016, 0, 21, 18, 30, 0)
			}
		];

		const modifiers = {
			event: [
				new Date(2015, 11, 31),
				new Date(2016, 0, 2),
				new Date(2016, 0, 8),
				new Date(2016, 0, 16),
				new Date(2016, 0, 19),
				new Date(2016, 0, 21)
			]
		};
		const modifiersStyles = {
			event: {
				color: "white",
				backgroundColor: "#5584ff"
			}
		};

		return (
			<div className="calendar">
				<MediaQuery maxDeviceWidth={765}>
					<div className="container">
						<DayPicker
							showOutsideDays
							month={new Date(2016, 0, 1)}
							modifiers={modifiers}
							modifiersStyles={modifiersStyles}
						/>
					</div>
				</MediaQuery>
				<MediaQuery minDeviceWidth={768}>
					<div className="container">
						<React.Fragment>
							<BigCalendar
								popup
								events={events}
								defaultDate={new Date(2016, 0, 1)}
							/>
						</React.Fragment>
					</div>
				</MediaQuery>
			</div>
		);
	}
}

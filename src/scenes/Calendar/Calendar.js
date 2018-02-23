import "react-big-calendar/lib/css/react-big-calendar.css";
import "./_calendar.scss";

import React, { Component } from "react";

import MediaQuery from "react-responsive";

import BigCalendar from "react-big-calendar";
import BookingCalendar from "react-booking-calendar";

import moment from "moment";
import events from "./components/data/events.js";
import bookings from "./components/data/bookings.js";

import CustomEvent from "./components/CustomEvent.js";

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[2]);
BigCalendar.momentLocalizer(moment);

export default class Calendar extends Component {
	render() {
		return (
			<div className="calendar">
				<MediaQuery maxDeviceWidth={765}>
					<div className="container">
						<BookingCalendar bookings={bookings} />
					</div>
				</MediaQuery>
				<MediaQuery minDeviceWidth={768}>
					<div className="container">
						<React.Fragment>
							<BigCalendar
								popup
								events={events}
								views={{ month: true, week: true, day: true }}
								defaultDate={new Date(2018, 1, 1)}
								components={{ event: CustomEvent }}
							/>
						</React.Fragment>
					</div>
				</MediaQuery>
			</div>
		);
	}
}

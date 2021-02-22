import React from "react";
import TicketTable from "../TicketTable";
import { Table } from "reactstrap";
import HelpAndSupportNav from "../../HelpAndSupportNav";
import SearchTicket from "../SearchTicket";
const OpenTicket = () => {
  return (
    <div className="need-help-page page-content transaction-page open-ticket-page">
      <HelpAndSupportNav />
      <SearchTicket />
      <div className="ticket-list-table">
        <Table bordered hover className="text-center">
          <thead>
            <th>Ticket ID</th>
            <th>Title</th>
            <th>Client</th>
            <th>Ticket Type</th>

            <th>Last Activity</th>
            <th>Status</th>
          </thead>
          <tbody className="ticket-row">
            <TicketTable
              ticketId="Ticket #1"
              ticketTitle="I can't change my profile image"
              ticketClient="XYZ Brand"
              ticketType="General Support"
              // ticketAssignedTo="Omkar "
              ticketLastActivity="30 Dec 2021,01:50:26pm"
              ticketStatus="Open"
            />
            <TicketTable
              ticketId="Ticket #2"
              ticketTitle="How to remove index.php from the url?"
              ticketClient="ABC Company"
              ticketType="General Support"
              // ticketAssignedTo="Govind "
              ticketLastActivity="30 Dec 2021,01:50:26pm"
              ticketStatus="Open"
            />
            <TicketTable
              ticketId="Ticket #3"
              ticketTitle="How to remove index.php from the url?"
              ticketClient="XYZ Brand"
              ticketType="General Support"
              // ticketAssignedTo="Kiran"
              ticketLastActivity="30 Dec 2021,01:50:26pm"
              ticketStatus="Open"
            />
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default OpenTicket;

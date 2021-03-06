import React from "react";
import { List, Image, Popup } from "semantic-ui-react";
import { IAttendee } from "../../../App/Models/activity";

interface IProps {
  attendees: IAttendee[];
}

const styles = {
  borderColor: "orange",
  borderWidth: 4
};

export const ActivityListItemAttendees: React.FC<IProps> = ({ attendees }) => {
  return (
    <List horizontal>
      {attendees.map(attendee => (
        <List.Item key={attendee.username}>
          <Popup
            header={attendee.displayname}
            trigger={
              <Image
                size="mini"
                circular
                src={attendee.image || "/assets/user.png"}
                bordered
                style={attendee.following ? styles : null}
              />
            }
          />
        </List.Item>
      ))}
    </List>
  );
};

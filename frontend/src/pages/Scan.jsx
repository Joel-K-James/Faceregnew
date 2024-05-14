import React from 'react';
import '../style/scan.css'; 
import { v4 as uuidv4 } from 'uuid';
const Scan = ({ }) => {
  const meetingLink = `viscol/${uuidv4()}`;
  return (
    <div className="scan-container">
      <div className="text">
        <p><strong>Face recognised successfully!</strong></p>
        <p>The meeting link for the meeting:</p>
      </div>
      <div className="link-box">
      <a href={`http://your-meeting-link.com/${meetingLink}`} target="_self">{meetingLink}</a>
      
      </div>
    </div>
  );
}

export default Scan;


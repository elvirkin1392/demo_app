import React from 'react';
import {useSelector} from "react-redux";
import {getModuleState} from "services/notes";
import {useParams} from "react-router-dom";

const NotePage = () => {
  const notesState = useSelector(getModuleState);
  const routeParams = useParams();
  const noteId = routeParams.id;
  return (
    <div>
      {notesState[noteId].title}
    </div>
  );
};

export default NotePage;
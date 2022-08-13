import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import EditTemplate from '@templates/Editor/EditTemplate';

interface LocationStateType {
  imgFile?: File;
}

const EditPage: React.FC = () => {
  const location = useLocation();
  const state = location.state as LocationStateType;
  const [isLoading, setIsLoading] = useState(state !== null);

  return <EditTemplate isLoading={isLoading} />;
};

export default EditPage;

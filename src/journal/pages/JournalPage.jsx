import { IconButton } from '@mui/material';
import { AddOutlined, SaveOutlined } from '@mui/icons-material';
import { JournalLayout } from '../layout/JournalLayout';
import { NoteView } from '../views';
import { NothingSelectedView } from '../views/NothingSelectedView';
import { useDispatch, useSelector } from 'react-redux';
import { startNewNote, startSaveNote } from '../../store/journal';

export const JournalPage = () => {
  const { isSaving, active } = useSelector((state) => state.journal);
  const dispatch = useDispatch();

  const onClickNewNote = () => {
    dispatch(startNewNote());
  };

  const onSaveNote = () => {
    dispatch(startSaveNote());
  };

  return (
    <JournalLayout>
      {!!active ? <NoteView /> : <NothingSelectedView />}

      <IconButton
        onClick={onClickNewNote}
        size="large"
        disabled={isSaving}
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50,
          display: { xs: 'none', sm: 'flex' },
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>

      <IconButton
        onClick={!!active ? onSaveNote : onClickNewNote}
        size="large"
        disabled={isSaving}
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50,
          display: { xs: 'flex', sm: 'none' },
        }}
      >
        {!!active ? (
          <SaveOutlined sx={{ fontSize: 30 }} />
        ) : (
          <AddOutlined sx={{ fontSize: 30 }} />
        )}
      </IconButton>
    </JournalLayout>
  );
};

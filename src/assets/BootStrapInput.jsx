import { styled, InputBase } from '@mui/material';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '0.375rem 0.75rem',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:focus': {
            borderRadius: 4,
            borderColor: 'rgba(136, 206, 157)',
            boxShadow: '0 0 0 0.2rem rgba(102, 196, 83, 0.25)',
        },
    },
}));

export default BootstrapInput
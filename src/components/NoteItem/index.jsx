import { Container } from './styles';
import { FiX, FiPlus } from 'react-icons/fi';

export function NoteItem({isNew, onClick, value, ...rest}) {
    return(
        <Container isNew={isNew}>
            <input
            value={value}
            readOnly={!isNew}
            type='text' 
            {...rest}
            />

            <button
            type='button'
            onClick={onClick}
            >
            {isNew ? <FiPlus /> : <FiX />}
            </button>

        </Container>
    )
};
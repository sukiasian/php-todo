import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReduxState } from '../../redux/reducers/rootReducer';
import HideComponentOnOutsideClickOrEscapePress from '../../hoc/HideComponentOnOutsideClickOrEscapePress';
import DarkScreen from '../../hoc/DarkScreen';
import { stopPropagation } from '../../utils/utilFunctions';

interface ConfirmDialogProps {
    question: string;
    positive: string;
    negative: string;
    handlePositiveClick: (...props: any) => any;
    handleNegativeClick: (...props: any) => any;
    handleCloseButtonClick: (...props: any) => any;
}

export default function ConfirmDialog({ question, positive, negative, handlePositiveClick, handleNegativeClick, handleCloseButtonClick }: ConfirmDialogProps): JSX.Element | null {
    const { confirmDialogueBoxIsOpen } = useSelector((state: ReduxState) => state.dialogueBoxReducer);

    const componentRef = useRef(null);

    return confirmDialogueBoxIsOpen ? (
        <HideComponentOnOutsideClickOrEscapePress innerRef={componentRef} handleHideComponent={handleCloseButtonClick}>
            <DarkScreen>
                <div className="confirm-dialog" onClick={stopPropagation}>
                    {/* <RemoveIcon handleClick={handleCloseButtonClick} /> */}
                    <div className="question-container">
                        <p className="paragraph">{question}</p>
                    </div>
                    <div className="answers-container">
                        <div className="confirm-answer confirm-answer--positive" onClick={handlePositiveClick}>
                            <p className="paragraph">{positive}</p>
                        </div>
                        <div className="confirm-answer confirm-answer--negative" onClick={handleNegativeClick}>
                            <p className="paragraph">{negative}</p>
                        </div>
                    </div>
                </div>
            </DarkScreen>
        </HideComponentOnOutsideClickOrEscapePress>
    ) : null;
}

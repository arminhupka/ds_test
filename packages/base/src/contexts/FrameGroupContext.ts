import { createContext } from 'react';

/** Tells a control it sits in a group whose root draws one frame around it (`InputGroup`, `DatePicker.Group`). */
const FrameGroupContext = createContext(false);

export { FrameGroupContext };

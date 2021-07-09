import {FC, useContext} from 'react';
import { StoreContent } from '../../Context/content';
import './summaryError.css'

interface SummaryErrorObj{
    isError:boolean
}
const SummaryError: FC<SummaryErrorObj>= ({isError})=> {
    const content:any = useContext(StoreContent)
    return (<>
        {isError && <div className="alert alert-warning error-top">
            <strong>!</strong> {content.summaryErr}
        </div>}</>
    );
}

export default SummaryError;
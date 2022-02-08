import { CProgress , CProgressBar } from '@coreui/react'


const TestProgressBar = () => {
    return ( 
    <div>
        <CProgress className="mb-3" >
            <CProgressBar color="success" value={25}/>
        </CProgress>
    </div> );
}
 
export default TestProgressBar;
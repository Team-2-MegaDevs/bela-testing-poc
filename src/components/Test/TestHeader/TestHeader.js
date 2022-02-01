import TestTimer from './TestTimer'
const TestHeader = () => {
    return (<div style={{ display: 'flex', flexDirection: 'row', paddingBottom: '10px' }} >
        <div style={{ width: "50%", display: 'flex', flexDirection: 'row' }}>
            <button >Cancel Test</button>
        </div>
        <div style={{ width: "50%", display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: "center" }}>
            <TestTimer />
        </div>
    </div>);
}

export default TestHeader;
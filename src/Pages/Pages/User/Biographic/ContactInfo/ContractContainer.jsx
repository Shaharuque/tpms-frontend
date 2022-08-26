
import React, {useState} from 'react'
import ContractInfo from './ContactInfo';
import EmargencyContact from './EmargencyContact';
const ContractContainer = () => {
    let [open, setOpen] = useState(true);
    return (
        <div>
            <ContractInfo></ContractInfo>
            <EmargencyContact></EmargencyContact>
        </div>
    )
}

export default ContractContainer
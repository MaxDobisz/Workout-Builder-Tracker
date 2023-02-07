import { createContext, useContext, useState } from "react";

const DaysContext = createContext();

export const useDaysContext = () => useContext(DaysContext);

export const DaysContextProvider = ({ children }) => {
    const [monday, setMonday] = useState([]);
    const [tuesday, setTuesday] = useState([]);
    const [wednesday, setWednesday] = useState([]);
    const [thursday, setThursday] = useState([]);
    const [friday, setFriday] = useState([]);
    const [saturday, setSaturday] = useState([]);
    const [sunday, setSunday] = useState([]);

    // const daysContext = {
    //     monday,
    //     tuesday,
    //     wednesday,
    //     thursday,
    //     friday,
    //     saturday,
    //     sunday
    // };


    const value = {
        daysContext: { monday, tuesday, wednesday, thursday, friday, saturday, sunday },
        setDaysContext: { setMonday, setTuesday, setWednesday, setThursday, setFriday, setSaturday, setSunday },
    }

    return (
        <DaysContext.Provider value={value}>
            {children}
        </DaysContext.Provider>
    )
}

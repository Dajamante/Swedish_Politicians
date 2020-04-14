import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import "react-dropdown/style.css";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { createList, toDateString } from "./graphListBuilder.js";
import SampleGraph from "./SampleGraph";

function convertIntoGraphData(ledamoter, startDate, endDate) {
    let res = [];
    let dateString = toDateString(startDate);
    let date = new Date(dateString);
    for (const ledamot of ledamoter) {
        let data = [];
        let i = 0;
        let j = 0;
        for (; date <= endDate; date.setDate(date.getDate() + 1)) {
            if (ledamot.data[j] == null) {
                data[i] = { x: date.getDate().toString(), y: null };
            } else if (
                new Date(ledamot.data[j].datum).getTime() === date.getTime()
            ) {
                data[i] = {
                    x: new Date(ledamot.data[j].datum).getDate(),
                    y: ledamot.data[j].resultat,
                };
                j++;
            } else {
                data[i] = { x: date.getDate().toString(), y: null };
            }
            i++;
        }
        date = new Date(dateString);

        res.push({
            id: ledamot.label,
            color: "hsl(230, 70%, 50%)",
            data: data,
        }); //färg  måste implementeras
    }

    return res;
}

const GraphFetcher = () => {
    const statOptions = [
        { value: "posneg", label: "Positivitet över tid" },
        { value: "absent", label: "Frånvaro över tid" },
        { value: "votedagainst", label: "Partiloyalitet över tid" },
    ];

    const [selectedLedamoter, setSelectedLedamoter] = useState([]);
    const [selectedStat, setSelectedStat] = useState(statOptions[0]);
    const [ledamoter, setLedamoter] = useState([]);
    const [date, setdate] = useState({
        startDate: new Date("2020-01-01"),
        endDate: new Date("2020-03-20"),
    });
    const [graphData, setGraphData] = useState({
        data: [],
        startDate: date.startDate,
        endDate: date.endDate,
    });

    const isDisabled = false;
    const isLoading = false;
    const isClearable = true;
    const isRtl = false;
    const isSearchable = true;

    useEffect(() => {
        let promises = [];
        let newLedamot = [];
        for (let ledamot of selectedLedamoter) {
            promises.push(
                axios.get(
                    "http://ec2-3-81-166-212.compute-1.amazonaws.com/api/v1/" +
                        "getResultOverTime" +
                        "?type=" +
                        selectedStat.value +
                        "&personid=" +
                        ledamot.value
                )
            );
        }
        Promise.all(promises)
            .then((res) => {
                console.log(res);
                for (let i = 0; i < res.length; i++) {
                    newLedamot.push({
                        ...selectedLedamoter[i],
                        data: res[i].data,
                    });
                }

                setGraphData({
                    data: newLedamot,
                    startDate: date.startDate,
                    endDate: date.endDate,
                });
            })
            .catch((err) => console.log(err));
    }, [selectedLedamoter]);

    useEffect(() => {
        createList(selectedStat.value, date.startDate, date.endDate)
            .then((res) => {
                setLedamoter(res);
            })
            .then()
            .catch((err) => console.log(err));
    }, [selectedStat, date]);

    useEffect(() => {
        setGraphData((prev) => ({
            ...prev,
            startDate: date.startDate,
            endDate: date.endDate,
        }));
    }, [date]);

    return (
        <div className="listPost">
            <div>
                Startdatum:{" "}
                <DatePicker
                    selected={date.startDate}
                    onChange={(startDate) =>
                        setdate((prevState) => ({ ...prevState, startDate }))
                    }
                    name="startDate"
                    dateFormat="yyyy-MM-dd"
                />
            </div>
            <p> </p>
            <div>
                Stoppdatum:{" "}
                <DatePicker
                    selected={date.endDate}
                    onChange={(endDate) =>
                        setdate((prevState) => ({ ...prevState, endDate }))
                    }
                    name="endDate"
                    dateFormat="yyyy-MM-dd"
                />
            </div>

            <br></br>
            <Fragment>
                <Select
                    className="dropDown"
                    classNamePrefix="select"
                    defaultValue={statOptions[0]}
                    isDisabled={isDisabled}
                    isLoading={isLoading}
                    isClearable={false}
                    isRtl={isRtl}
                    isSearchable={false}
                    name="color"
                    options={statOptions}
                    value={selectedStat}
                    onChange={(selectedStat) => setSelectedStat(selectedStat)}
                />
            </Fragment>
            <Fragment>
                <Select
                    className="dropDown"
                    classNamePrefix="select"
                    defaultValue={{ value: "Michael", label: "Michael" }}
                    isDisabled={isDisabled}
                    isMulti
                    isLoading={isLoading}
                    isClearable={isClearable}
                    isRtl={isRtl}
                    isSearchable={isSearchable}
                    name="color"
                    options={ledamoter}
                    value={selectedLedamoter}
                    onChange={(ledamoter) =>
                        ledamoter === null
                            ? setSelectedLedamoter([])
                            : setSelectedLedamoter(ledamoter)
                    }
                />
            </Fragment>
            <br></br>
            {
                <SampleGraph
                    data={convertIntoGraphData(
                        graphData.data,
                        graphData.startDate,
                        graphData.endDate
                    )}
                />
            }
        </div>
    );
};

export default GraphFetcher;

import React, { useEffect, useState } from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import Header from '../Header';
import { v4 } from 'uuid';
import DrawerBar from '../DrawerBar';

export default () => {

    const [isLoading, setIsLoading] = useState(false);
    const [subjRes, setSubjRes] = useState();
    const [semestr, setSemestr] = useState('6');

    const fetching = async (semestr) => {
        setSemestr(semestr);
        try {
            setIsLoading(true);
            const res = await (await fetch(`http://schedule.kpi.kharkov.ua/JSON/kabinet?email=dgygurdenok@gmail.com&pass=4NaqEf&page=2&semestr=${semestr}`)).json();
            setSubjRes(res.map((el) => ({
                subj_id: el.subj_id,
                subject: el.subject,
                teacher: el.prepod,
                kafedra: el.kafedra,
                kafedraShort: el.kabr,
                markInt: el.oc_short,
                markNational: el.oc_naz,
                markBigInt: el.oc_bol,
                markEcts: el.oc_ects,
                credits: el.credit,
                data: el.data,
                personalExs: el.indzav,
                hvost: false,
                control: el.control,
            })));
            setIsLoading(false);
            //console.log('subjRes', subjRes);
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    }
    useEffect(() => {
        fetching(semestr);
    }, [semestr])

    const renderMarks = () => {
        if (subjRes !== undefined) {
            return (subjRes.map((studentMarks) => {
                console.log('studentMarks', studentMarks);
                return (
                    <ScrollView key={v4()}>
                        <Text>{studentMarks.subject}</Text>
                        <Text>{studentMarks.markEcts}</Text>
                    </ScrollView>
                )
            }))

        } else {
            return <Text>Loading!</Text>
        }
    }

    return (
        <View>
            {/* <DrawerBar /> */}
            <Header
                pageName="Student Book"
            />
            <ScrollView
                horizontal={true}
                keyboardShouldPersistTaps="always"
                style={{
                    marginLeft: 15,
                }}
            >
                <TouchableOpacity
                    onPress={() => fetching(1)}
                >
                    <Text>Course 1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => fetching(3)}
                >
                    <Text>Course 2</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => fetching(5)}
                >
                    <Text>Course 3</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => fetching(7)}
                >
                    <Text>Course 4</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => fetching(9)}
                >
                    <Text>Course 5</Text>
                </TouchableOpacity>
            </ScrollView>
            <ScrollView
                horizontal={true}
                keyboardShouldPersistTaps="always"
                style={{
                    marginLeft: 15,
                }}
            >
                <TouchableOpacity
                    onPress={() => console.log('1')}
                >
                    <Text>First semester</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => console.log("2")}
                >
                    <Text>Second semeseter</Text>
                </TouchableOpacity>
            </ScrollView>
            <View
                style={{
                    marginTop: 10,
                    marginBottom: 10,
                    borderBottomWidth: 1,
                }}
            />
            {renderMarks()}
        </View>
    )
}
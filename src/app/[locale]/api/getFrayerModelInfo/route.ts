import { NextRequest } from 'next/server'
import {getFrayerModelByNum} from "~/models/frayerModel";
import { FrayerModel } from '~/types/FrayerModel';
import {respData} from '~/lib/resp';


export async function GET(request : NextRequest) {

    // console.log('API Request received');
    const number = request.nextUrl.searchParams.get("number")
    console.log("get number :",number);
    let frayerModel :FrayerModel = await getFrayerModelByNum(number);
    console.log("api frayde mode :",frayerModel);

    return respData(frayerModel);


}

import { NextRequest } from 'next/server'
import {getRecommendedFrayerModel} from "~/models/frayerModel";
import { FrayerModel } from '~/types/FrayerModel';
import {respData} from '~/lib/resp';


export async function GET(request : NextRequest) {

   //  console.log('API Request received');
    const page=request.nextUrl.searchParams.get('pagesize');
    let pageNum: number =50;
    if(page){
        pageNum=   parseInt(page);
    }

    let allVideoList :FrayerModel[] = await getRecommendedFrayerModel(1,pageNum);
    
    return respData(allVideoList);


}
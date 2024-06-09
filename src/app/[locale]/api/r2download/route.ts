
// app/api/download/route.ts

import { GetObjectCommand } from '@aws-sdk/client-s3'
import chalk from 'chalk'

import { r2 } from '@/lib/r2'
import { NextRequest } from 'next/server'

export async function GET(request : NextRequest) {
  try {
    const fileName = request.nextUrl.searchParams.get("fileName")

    console.log(chalk.yellow(`从 R2 检索 PDF文件! ${fileName}`))  

    // 从 R2 获取 PDF 文件
    const pdf = await r2.send(
      new GetObjectCommand({
        Bucket: process.env.R2_BUCKET_NAME,
        Key: fileName, 
      })
    )

    if (!pdf) {
      throw new Error('未找到 PDF 文件。')
    }

    // 返回 PDF 文件流
    return new Response(pdf.Body?.transformToWebStream(), {   
      headers: {
        'Content-Type': 'application/pdf',
      },
    })

  } catch (err) {
    console.log('出错:', err) 
  }
}

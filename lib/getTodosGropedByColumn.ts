import { databases } from "@/appwrite";

export const getTodosGroupedByColumn = async () => {
    const data = await databases.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID!, //env 파일을 불러오지 못함
        process.env.NEXT_PUBLIC_TODOS_COLLECTION_ID!
    )
    console.log(data)
}
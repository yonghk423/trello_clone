interface Board {
    columns : Map<TypeedColumn, Column>
}

type TypedColumn = 'todo' | "inprogress" | 'done'

interface Column {
    id : TypeedColumn,
    todos : Todo[]
}

interface Todo extends Models.Document {
    $id: string;
    $createdAt: string;
    title: string;
    status: TypeedColumn;
    image?: string;
}

interface Image {
    buckedtId: string;
    faileId: string;
}


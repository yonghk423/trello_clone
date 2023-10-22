interface Board {
    columns : Map<TypeedColumn, Column>
}

type TypeedColumn = 'todo' | "inprogress" | 'done'

interface Column {
    id : TypeedColumn,
    todos : Todo[]
}

interface Todo {
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

interface Board {
    columns : Map<TypeedColumn, Column>
}

type TypeedColumn = 'todo' | "inprogress" | 'done'
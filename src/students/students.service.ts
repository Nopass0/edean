import { Injectable } from '@nestjs/common';

interface Student {
    id: number;
    name: string;
}

@Injectable()
export class StudentsService {
    private students = [ { id: 0, name: "Chel" } ]

    getAll() : Student[] {
        return this.students;
    }

    getById(id: number) : Student {
        return this.students.find(s => s.id === id);
    }

    create(student) {
        this.students.push(student);
    }
}

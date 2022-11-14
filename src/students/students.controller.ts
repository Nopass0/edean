import { Controller, Get, Param } from '@nestjs/common';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {

    constructor(private readonly studentsService : StudentsService) {}

    @Get()
    getAll(): { id: number, name: string }[] {
        return this.studentsService.getAll();
    }

    @Get(':id')
    getOne(@Param() params): string {
        return `This action returns a #${params.id} student`;
    }
}

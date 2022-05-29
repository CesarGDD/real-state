import { Module } from '@nestjs/common';
import { PropertyResolver } from './property.resolver';

@Module({
    imports: [],
    providers: [PropertyResolver]
})
export class PropertyModule {}

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { Blog2BlogModule } from './blog/blog.module';
import { Blog2EntryModule } from './entry/entry.module';
import { Blog2TagModule } from './tag/tag.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        Blog2BlogModule,
        Blog2EntryModule,
        Blog2TagModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Blog2EntityModule {}

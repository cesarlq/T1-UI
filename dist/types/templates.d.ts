import { StatusAsyncThunkI } from './redux';
import { ResponseShippingsDataI } from './responseShippings';
export interface InitialStateTemplatesI {
    getTemplates: StatusAsyncThunkI;
    templates: null | ResponseShippingsDataI<UserProductTemplateI[]>;
    getTemplatesForTemplatesSelect: StatusAsyncThunkI;
    templatesForTemplatesSelect: null | ResponseShippingsDataI<UserProductTemplateI[]>;
    createTemplate: StatusAsyncThunkI;
    deleteTemplate: StatusAsyncThunkI;
    updateTemplate: StatusAsyncThunkI;
    setFavoriteTemplate: StatusAsyncThunkI<UserProductTemplateI>;
    favoriteTemplate: UserProductTemplateI | null;
}
export interface UserProductTemplateI {
    _id?: string;
    storeId: string;
    weight_unit: string;
    weight: number;
    dimensions_unit: string;
    height: number;
    width: number;
    length: number;
    name: string;
    type: string;
    uuid?: string;
    favorite?: boolean;
    commerceId?: string;
}
export interface CreateTemplateI {
    dimensions_unit: 'custom';
    storeId: number | undefined;
    type: 'custom';
    weight_unit: 'custom';
    name: string;
    height: number;
    length: number;
    weight: number;
    width: number;
    commerceId: number | undefined;
}
//# sourceMappingURL=templates.d.ts.map
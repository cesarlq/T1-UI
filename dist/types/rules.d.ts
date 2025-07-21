import { CourierI } from './parcels';
import { StatusAsyncThunkI } from './redux';
import { GeneralResponseI, PaginationI, ResponseHudI } from './response';
import { Node } from '@xyflow/react';
import { UserI } from './user';
export type ElkNodeData = {
    label: string;
    sourceHandles: {
        id: string;
    }[];
    targetHandles: {
        id: string;
    }[];
};
export type ElkNode = Node<ElkNodeData & {
    ruleData?: Omit<RuleI, 'couriers_services'>;
    dataParcel?: CouriersServiceI;
    isFirstParcel?: boolean;
    indexRule: number;
}, 'elk'>;
export interface InitialStateRulesI {
    getRules: StatusAsyncThunkI;
    rules: null | ResponseHudI<RuleI[]>;
    createRule: StatusAsyncThunkI;
    updateRule: StatusAsyncThunkI;
    deleteRules: StatusAsyncThunkI<{
        userInfo: UserI;
        data: {
            rule_id: string;
        };
        fromDiscard?: boolean;
    }>;
    setDraggableOrder: StatusAsyncThunkI;
    setActiveRule: StatusAsyncThunkI<{
        userInfo: UserI;
        ruleId: string;
        active: boolean;
        fromDiscard?: boolean;
    }>;
    currentRuleIdSelected: CurrentRuleNodeIdSelectedI;
    createdRuleId: string | null;
    currentParcelSelected: CurrentParcelSelectedI;
    getPackagesByPriority: StatusAsyncThunkI;
    packagesByPriority: null | GeneralResponseI<PackagesByPriorityI>;
    updatePackagesByPriority: StatusAsyncThunkI;
    getLogs: StatusAsyncThunkI;
    getRuleRequestLog: StatusAsyncThunkI;
    ruleRequestLog: null | RuleRequestLogI;
    logs: {
        logs: LogI[];
        pagination: PaginationI;
    } | null;
}
interface ScheduleI {
    start_time: string;
    end_time: string;
}
export interface CouriersServiceI {
    code: string;
    distribution_percentage: number;
    active?: boolean;
    service: string;
}
export interface RuleI {
    rule_id: string;
    id: string;
    name: string;
    description: string;
    is_insured: boolean;
    condition_mode: 'and' | 'or' | '';
    status: boolean;
    cost: boolean;
    initial_cost: number;
    final_cost: number;
    cost_evaluation: string;
    volumetry: boolean;
    initial_weight: number;
    final_weight: number;
    volumetry_evaluation: string;
    zone: boolean;
    originZone: boolean;
    days: boolean;
    custom: boolean;
    monday: boolean;
    tuesday: boolean;
    wednesday: boolean;
    thursday: boolean;
    friday: boolean;
    saturday: boolean;
    sunday: boolean;
    schedule: boolean;
    schedules: ScheduleI[];
    couriers_services: CouriersServiceI[];
    couriers: Omit<CouriersServiceI, 'distribution_percentage' | 'service'>[];
    zones: string[] | {
        id: string;
        name: string;
    }[];
    originZones?: string[] | {
        id: string;
        name: string;
    }[];
    created_at: string;
    updated_at: string;
    custom_fields?: CustomFieldsI;
    priority: number;
}
export interface RulesForDraggableI {
    rules: RuleForDraggableI[];
}
export interface RuleForDraggableI {
    id: string;
    priority: number;
}
export interface CurrentRuleNodeIdSelectedI {
    id: string | null;
    action: 'edit' | 'delete' | 'idle' | 'duplicate';
}
export interface CurrentParcelSelectedI {
    index: number | null;
    parcelService: string | null;
}
export interface CustomFieldsI {
    current_classification: string;
    current_operator: string;
    current_type: string;
    numeric_fields?: {
        initial_number: number;
        final_number?: number;
    };
    alphanumeric_fields?: {
        text: string;
    };
    date_fields?: {
        date_value: number | string;
    };
    time_fields?: {
        hour: string;
        time_zone?: string;
    };
    date_time_fields?: {
        date_time: string;
        time_zone?: string;
    };
}
export interface CustomRuleServiceI {
    name: string;
    priority: number;
    name_service: string;
    type: string;
    status: boolean;
    publicName?: string;
}
export interface PackagesByPriorityI {
    couriers: CourierI[];
    rule: "Custom" | "T1" | "Economic" | "Fast";
    custom_rule?: CustomRuleServiceI[];
    rule_default_t1?: CustomRuleServiceI[];
    current_rule?: CustomRuleServiceI[];
}
export interface LogI {
    id: string;
    petition_id: string;
    resolution_datetime: string;
    rule: string;
    conditions: string;
    carrier: string;
    service: string;
    cost: number;
    status: string;
    guide: string;
}
interface Carrier {
    priority: number;
    rule_priority: number;
    rule_id: string;
    carrier: string;
    carrier_is_active: string;
    cost: number;
    cost_difference: number;
    service: string;
    api: string;
    delivery_time: string;
    advantage: string;
    selected: boolean;
}
interface AppliedConditions {
    condition_mode: string;
    condition_mode_description: string;
    summary_message: string;
    conditions: Record<string, {
        applied: boolean;
        description: string;
    }>;
}
interface PetitionSummary {
    start_processing: string;
    end_processing: string;
    rule_type: string;
    applied_rule: string;
    total_processing_time: string;
}
export interface RuleRequestLogI {
    status: boolean;
    _id: string;
    petition_id: string;
    timestamp: string;
    guide: string;
    carriers: Carrier[];
    applied_conditions: AppliedConditions;
    petition_summary: PetitionSummary;
}
export {};
//# sourceMappingURL=rules.d.ts.map
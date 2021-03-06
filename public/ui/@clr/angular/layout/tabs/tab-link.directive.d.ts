import { ComponentFactoryResolver, ElementRef, ViewContainerRef } from '@angular/core';
import { IfActiveService } from '../../utils/conditional/if-active.service';
import { TemplateRefContainer } from '../../utils/template-ref/template-ref-container';
import { AriaService } from './providers/aria.service';
export declare class ClrTabLink {
    ifActiveService: IfActiveService;
    private id;
    private ariaService;
    private el;
    private cfr;
    private viewContainerRef;
    tabsId: number;
    inOverflow: boolean;
    templateRefContainer: TemplateRefContainer;
    constructor(ifActiveService: IfActiveService, id: number, ariaService: AriaService, el: ElementRef, cfr: ComponentFactoryResolver, viewContainerRef: ViewContainerRef, tabsId: number);
    readonly ariaControls: string;
    tabLinkId: string;
    activate(): void;
    readonly active: boolean;
}

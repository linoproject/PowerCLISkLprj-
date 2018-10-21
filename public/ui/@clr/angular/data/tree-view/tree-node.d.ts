import { EventEmitter, OnDestroy } from '@angular/core';
import { Expand } from '../../utils/expand/providers/expand';
import { AbstractTreeSelection } from './abstract-tree-selection';
import { TreeSelectionService } from './providers/tree-selection.service';
import { ClrCommonStrings } from '../../utils/i18n/common-strings.interface';
export declare class ClrTreeNode extends AbstractTreeSelection implements OnDestroy {
    nodeExpand: Expand;
    parent: ClrTreeNode;
    treeSelectionService: TreeSelectionService;
    nodeId: string;
    commonStrings: ClrCommonStrings;
    constructor(nodeExpand: Expand, parent: ClrTreeNode, treeSelectionService: TreeSelectionService, nodeId: string, commonStrings: ClrCommonStrings);
    private _children;
    readonly children: ClrTreeNode[];
    checkIfChildNodeRegistered(node: ClrTreeNode): boolean;
    register(node: ClrTreeNode): void;
    unregister(node: ClrTreeNode): void;
    activateSelection(): void;
    nodeSelected: boolean;
    nodeSelectedChange: EventEmitter<boolean>;
    selectedChanged(): void;
    readonly selectable: boolean;
    nodeIndeterminate: boolean;
    nodeIndeterminateChanged: EventEmitter<boolean>;
    indeterminateChanged(): void;
    toggleExpand(): void;
    readonly caretDirection: string;
    readonly caretTitle: string;
    expanded: boolean;
    readonly state: string;
    readonly treeNodeRole: string;
    readonly rootAriaMultiSelectable: boolean;
    readonly ariaSelected: boolean;
    readonly ariaTreeNodeChildrenRole: string;
    ngOnDestroy(): void;
}

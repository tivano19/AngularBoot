import {TreeNode} from "primeng/api";

import {Parent, Fils} from './parent';

export class TreeNodeAdapter {

    private nodes: TreeNode[];

    constructor(objs: Parent[]) {
        console.log('TreeNodeAdapter constructor: ' + objs);
        this.adapte(objs);
    }


    public get(): TreeNode[] {
        return this.nodes;
    }

    private adapte(objs: Parent[]) {

        this.nodes = new Array(objs.length);

        for (let i = 0; i < objs.length; i++) {
            let node: TreeNode = {
                data: this.getData(objs[i]),
                children: this.getChildren(objs[i].fils),
            };

            this.nodes[i] = node;
        }

        console.log('TreeNodeAdapter adapte: ' + this.nodes);
    }

    private getData(parent: Parent): any {
        return {
            name: parent.name,
            size: parent.size,
            type: parent.type
        };
    }

    private getChildren(fils: Fils[]): any {

        let children = new Array(fils.length);

        for (let i = 0; i < fils.length; i++) {
            let child = fils[i];
            children[i] = {
                data: {
                    name: child.nameF,
                    size: child.sizeF,
                    type: child.typeF
                }
            };
        }

        return children;
    }


}
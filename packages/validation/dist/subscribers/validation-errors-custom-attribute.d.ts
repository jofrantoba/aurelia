import { IContainer } from '@aurelia/kernel';
import { INode } from '@aurelia/runtime';
import { IValidationController, ValidationResultsSubscriber, ValidationEvent, ValidationResultTarget } from '../validation-controller';
/**
 * A validation errors subscriber in form of a custom attribute.
 *
 * It registers itself as a subscriber to the validation controller available for the scope.
 * The target controller can be bound via the `@bindable controller`; when omitted it takes the controller currently registered in the container.
 *
 * The set of errors related to the host element or the children of it , are exposed via the `@bindable errors`.
 *
 * @example
 * ```html
 * <div id="div1" validation-errors.bind="nameErrors">
 *   <input id="target1" type="text" value.two-way="person.name & validate">
 *   <span class="error" repeat.for="errorInfo of nameErrors">
 *     ${errorInfo.result.message}
 *   </span>
 * </div>
 * ```
 */
export declare class ValidationErrorsCustomAttribute implements ValidationResultsSubscriber {
    private readonly container;
    controller?: IValidationController;
    errors: ValidationResultTarget[];
    private readonly errorsInternal;
    private readonly host;
    constructor(host: INode, container: IContainer);
    handleValidationEvent(event: ValidationEvent): void;
    beforeBind(): void;
    beforeUnbind(): void;
}
//# sourceMappingURL=validation-errors-custom-attribute.d.ts.map
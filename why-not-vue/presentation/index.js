// Import React
import React from "react";
// Import Spectacle Core tags

import {
  Deck,
  Heading,
  CodePane,
  Image,
  Slide,
  Text,
  FlexBox,
  Box,
  Progress,
  Table,
  TableHeader,
  Appear,
  TableBody,
  TableRow,
  TableCell,
} from "spectacle";

import vueLogo from "../assets/vueLogo.png";
import vueStats from "../assets/vueStats.png";
import vue1 from "../assets/vue1.png";
import vue2 from "../assets/vue2.png";
import react from "../assets/react.png";
import angular from "../assets/angular.png";
// Import theme
// Require CSS
require("normalize.css");

const theme = {
  colors: {
    primary: "#3d5a80",
    secondary: "#98c1d9",
    tertiary: "white",
    quaternary: "#e0fbfc",
    quinary: "#293241",
  },
};
const template = () => (
  <FlexBox position="absolute" bottom={0} width={1}>
    <Box padding="1em">
      <FlexBox alignItems="center" justifyContent="center">
        <Progress color={theme.colors.secondary} />
      </FlexBox>
    </Box>
  </FlexBox>
);

const Code = ({ children, ...props }) => (
  <CodePane language="javascript" style={{ overflow: "scroll" }} {...props}>
    {children}
  </CodePane>
);

const Flex = ({ children }) => (
  <FlexBox alignItems="center" justifyContent="center" flexDirection="column">
    {children}
  </FlexBox>
);
const Title = ({ children, ...props }) => (
  <Heading {...props} color="primary">
    {children}
  </Heading>
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck theme={theme}>
        <Slide transition={["zoom"]}>
          <FlexBox align="center" style={{ height: "100%" }}>
            <Title caps>
              Czy warto uczyć się Vue w 2022r <br /> i dlaczego nie?
            </Title>
          </FlexBox>
        </Slide>

        <Slide transition={["fade"]}>
          <Title bold style={{ marginBottom: "15vh" }}>
            Przemysław Beigert
            <br />
            Lead developer @ Omniscopy
          </Title>

          <FlexBox
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <Text bold color="quinary">
              https://github.io/przemyslawjanpietrzak
              <br />
              https://twitter.com/przemyslawjanp
              <br />
              https://dev.to/przemyslawjanpietrzak
            </Text>
          </FlexBox>
        </Slide>

        <Slide transition={["fade"]}>
          <Title color="primary">Spis treści</Title>
          <FlexBox
            align="center"
            flexDirection="column"
            style={{ height: "100%" }}
          >
            <Text margin="10px 0 0" color="quinary">
              - Wprowadzenie do Vue
              <br />
              - Porównanie Vue, Reacta i Angulara
              <br />
              - Use casy
              <br />- Podsumowanie
            </Text>
          </FlexBox>
        </Slide>

        <Slide transition={["fade"]}>
          <Title bold>Rozdział I</Title>

          <Flex>
            <Text margin="10px 0 0" color="quinary">
              Wprowadzenie do Vue
            </Text>
            <br />
            <br />
            <Image src={vueLogo} height="20vh" width="20vw" />
          </Flex>
        </Slide>

        <Slide transition={["fade"]}>
          <Title bold>Stackoverflow survey 2021</Title>
          <FlexBox
            align="center"
            flexDirection="column"
            style={{ height: "100%" }}
          >
            <Image src={vueStats} />
          </FlexBox>
        </Slide>

        <Slide
          style={{ overflow: "scroll" }}
          transition={["fade"]}
          textColor="tertiary"
        >
          <Code>
            {`
            <template>
              <div>
                <div>Tasks: {{ count }}</div>
                <div v-if="isLoading">spinner</div>
                <ul>
                  <li v-for="task in tasks" :key="task.id">
                    <todo-item :task="task" />
                  </li>
                </ul>
                <button @click="addTodo(todo)">add todo</button>
              </div>
            </template>
            
            <script>
            import TodoItem from "./TodoItem.vue";
            
            export default {
              name: "TodoApp",
              components: {
                TodoItem,
              },
              props: ['tasks'],
              data() {
                return {
                  isLoading: false,
                };
              },
              computed: {
                count() {
                  return this.tasks.length;
                },
              },
              methods: {
                addTodo(todo) {
                  this.isLoading = true;
                  this.todos.push(todo);
                  this.isLoading = false;
              },
            };
            </script>
            `}
          </Code>
        </Slide>

        {/* <Slide transition={["fade"]} bg textColor="tertiary">
          <Title size={6} style={{ color: "#f80045" }} margin="25px">
            Byty
          </Title>
          <Text margin="10px 0 0" style={{ fontSize: "25px" }}>
            Componenty
          </Text>
          <Text margin="10px 0 0" style={{ fontSize: "25px" }}>
            Dyrektywy
          </Text>
          <Text margin="10px 0 0" style={{ fontSize: "25px" }}>
            Pipes
          </Text>
          <Text margin="10px 0 0" style={{ fontSize: "25px" }}>
            Pluginy
          </Text>
        </Slide> */}

        <Slide transition={["fade"]} bg>
          <Title style={{ marginBottom: "1vh" }}>
            https://github.com/vuejs
          </Title>
          <Flex>
            <Text color="quinary">
              - Vuex/Pinia - state manger
              <br />
              - Router
              <br />
              - Jest plugin and utils
              <br />
              - Eslint plugin
              <br />
              - CLI
              <br />
              - Types
              <br />
              - Dev Tools
              <br />- VSCode plugin
            </Text>
          </Flex>
        </Slide>

        <Slide transition={["fade"]} bg>
          <FlexBox
            align="center"
            flexDirection="column"
            style={{ height: "100%" }}
          >
            <Title>Rozdział II</Title>
            <Flex>
              <Text color="quinary">Porównanie</Text>
            </Flex>
          </FlexBox>
        </Slide>

        <Slide transition={["fade"]} bg>
          <FlexBox align="center" style={{ height: "100%" }}>
            <Title>I/O</Title>
          </FlexBox>
        </Slide>

        <Slide style={{ overflow: "scroll" }} transition={["fade"]}>
          <Title>I/O React</Title>
          <Code>
            {`
              import { Child } from "./child";

              export const Component = ({ input, output }) => (
                <Child onClick={() => output(42)} input={input}>{input}</Child>
              );
            `}
          </Code>
        </Slide>

        <Slide style={{ overflow: "scroll" }} transition={["fade"]}>
          <Title>I/O React + TS</Title>
          <Code language="typescript">
            {`
              import { Child } from "./child";

              interface Props {
                input: string;
                output: (arg: number) -> void;
              }

              export const Component: React.FC<Props> = ({ input, output }) => (
                <Child onClick={() => output(42)} input={input}>{input}</Child>
              );
            `}
          </Code>
        </Slide>

        <Slide style={{ overflow: "scroll" }} transition={["fade"]}>
          <Title>I/O React + JS</Title>
          <Code language="typescript">
            {`
              import PropTypes from "prop-types";
              import { Child } from "./child";

              const Component = ({ input, output }) => (
                <Child onClick={() => output(42)} input={input}>{input}</Child>
              );

              Component.propTypes = {
                input: PropTypes.string,
                output: PropTypes.func,
              }
            `}
          </Code>
        </Slide>

        <Slide style={{ overflow: "scroll" }}>
          {/* <Title >I/O Vue</Title> */}
          <Code>
            {`
          <template>
            <child @click="onEvent($event)" :input="input">{{ input }}</child>
          </template>
          
          <script>
          import Child from "./Child.vue";
          
          export default {
            components: {
              Child,
            },
            emits: ["output"], // since v3, optional
            props: {
              input: {
                type: String,
                required: true,
                validate(input) {
                  return true;
                },
              },
            },
            actions: {
              output() {
                this.$emit("output", 42);
              },
              onEvent(ev) {}
            },
          };
          </script>
            `}
          </Code>
        </Slide>

        <Slide transition={["fade"]}>
          <Title>I/O Angular</Title>
          <Code language="typescript">{`
           import { Component, Input } from '@angular/core';
           import { Observable } from 'rxjs';
           
           @Component({
               selector: 'app-todo-item',
               template: '
                <child (click)="output.emit(42)" [input]="input">
                 {{ input }} {{ input$ | async }}
                </child>',
           })
           export class AppComponent {
             @Input() input: string;
             @Input() input$: Observable<string>;
             @Output() output = new EventEmitter<number>();
           }`}</Code>
        </Slide>

        {/* <Slide transition={["fade"]} bg>
          <FlexBox align="center" style={{ height: "100%" }}>
            <Title>Podsumowanie</Title>
          </FlexBox>
        </Slide> */}

        <Slide>
          <FlexBox
            align="center"
            flexDirection="column"
            style={{ height: "100%" }}
          >
            <Title>Styles</Title>
          </FlexBox>
        </Slide>

        <Slide style={{ overflow: "scroll" }} transition={["fade"]} bg>
          <Title>Styles React</Title>
          <Code>
            {`
            import styled from "styled-components";

            export const Element = styled.div\`
              color: white;
              &:last-child {
                margin-bottom: 0;
              }

              \${(props) => \`width: \${props.width}%\`}
            `}
          </Code>
        </Slide>

        <Slide transition={["fade"]}>
          <Title>Styles Vue</Title>
          <Code>{`
          <template>
            <div>42</div>
            <child />
          </template>

          <styles scoped lang="scss">
          @import "colors.scss";
          div {
            color: $blue;
          }
          :v-deep span {
            color: red;
          }
          </styles>
          `}</Code>
        </Slide>

        <Slide style={{ overflow: "scroll" }} transition={["fade"]} bg>
          <Title>Styles Angular</Title>

          <Code language="typescript">{`
          import { Component, ViewEncapsulation } from '@angular/core';

          @Component({
              selector: 'app-component',
              stylesUrl: './app-component.scss',
              template: '<div>42</div>',
              encapsulation: ViewEncapsulation.None | ViewEncapsulation.Emulated | ViewEncapsulation.ShadowDom,
              animations: [],
          })
          export class AppComponent {}
          `}</Code>
        </Slide>

        <Slide transition={["fade"]}>
          <FlexBox
            align="center"
            flexDirection="column"
            style={{ height: "100%" }}
          >
            <Title>Forms</Title>
          </FlexBox>
        </Slide>
        {/* 
        <Slide style={{ overflow: "scroll" }} transition={["fade"]}>
          <Title>Form React</Title>
          <Code language="typescript">{`
            import { useState } from "react";

            export const Form = () => {
              const [input, setInput] = useState("");
              return <input value={input} onChange={(e) => setInput(e.target.value)} />;
            };
          `}</Code>
        </Slide> */}

        <Slide style={{ overflow: "scroll" }} transition={["fade"]}>
          <Title>Form React</Title>
          <Code language="typescript">{`
            import { useState } from "react";

            export const Form = () => {
              const [input, setInput] = useState("");
              return <input value={input} onChange={(e) => setInput(e.target.value)} />;
            };
          `}</Code>
        </Slide>

        <Slide
          style={{ overflow: "scroll" }}
          transition={["fade"]}
          bgColor="primary"
        >
          {/* <Title color="primary">Form React</Title> */}
          <Code language="jsx">{`
            import { useForm } from "react-hook-form";
            
            export const Component = () => {
              const {
                register,
                handleSubmit,
                formState: { errors },
              } = useForm();
              const onSubmit = (data) => {};
            
              return (
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input defaultValue="Jan" {...register("firstName")} />
            
                  <input {...register("lastName", { required: true })} />
                  {errors.required && <span>This field is required</span>}
            
                  <input type="submit" />
                </form>
              );
            }
          `}</Code>
        </Slide>

        <Slide
          style={{ overflow: "scroll" }}
          transition={["fade"]}
          color="primary"
        >
          <Title>Form Vue</Title>
          <Code>{`
          <template><input v-model="name" /> {{ name }}</template>

          <script>
          export default {
            name: "Component",
            data() {
              return {
                name: "",
              };
            },
          };
          </script>
          `}</Code>
        </Slide>

        <Slide
          style={{ overflow: "scroll" }}
          transition={["fade"]}
          bgColor="primary"
        >
          <Title>Form Angular</Title>
          <Code>{`
          import { NgModule } from '@angular/core';
          import { ReactiveFormsModule } from '@angular/forms';
          
          @NgModule({
            imports: [
              ReactiveFormsModule
            ],
          })
          export class AppModule {}`}</Code>
        </Slide>

        <Slide
          style={{ overflow: "scroll" }}
          transition={["fade"]}
          bgColor="primary"
        >
          {/* <Title>Form Angular</Title> */}
          <Code>{`
          @Component({
            selector: 'form-component',
            template: \`
            <form [formGroup]="form">
              <input
                id="firstName"
                type="text"
                [class.is-invalid]="formValidator.isDirty(form, 'firstName')"
                formControlName="firstName"
              >
              <button type="submit" (submit)="onSubmit()">Submit</button>
            </form>
            \`,
          })
          export class FormComponent {
            form: FormGroup;
            constructor(private fb: FormBuilder) {
              this.form = this.fb.group({
                firstName: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(42)]],
                lastName: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(42)]],
              });
            }
            onSubmit() {}
          }
          `}</Code>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <FlexBox
            align="center"
            flexDirection="column"
            style={{ height: "100%" }}
          >
            <Title>Update</Title>
          </FlexBox>
        </Slide>

        <Slide style={{ overflow: "scroll" }} transition={["fade"]}>
          <Title>Update React</Title>
          <Code>{`
          import { useEffect } from "react";

          export const Component = ({ attr }) => {
            useEffect(() => {
              console.log(attr);
            }, [attr]);
          
            return <div>{input}</div>;
          };
          `}</Code>
        </Slide>

        <Slide
          style={{ overflow: "scroll" }}
          transition={["fade"]}
          bgColor="primary"
        >
          <Title>Update Vue</Title>
          <Code>{`
        <template><div>{{ field }}</div></template>
        
        <script>
        import TodoItem from "./TodoItem.vue";
        
        export default {
          methods: {
            increase() {
              this.field++;
            },
          },
          watch: {
            field(newValue, oldValue) {},
            'some.nested.key'(newValue, oldValue) {}
          },
        };
        </script>
          `}</Code>
        </Slide>

        <Slide transition={["fade"]}>
          <Title>Update Angular</Title>
          <Code language="typescript">{`
            import {Component, OnChanges, SimpleChanges} from '@angular/core';
 
            @Component({
              selector: 'app-component',
              templateUrl: './app.component.html'
            })
            export class AppComponent implements OnChanges {
              attr: string;
              ngOnChanges({ attr }: SimpleChanges) {
                 if (attr.oldValue !== attr.newValue) {
                     // HERE
                 }
              }
            }
          `}</Code>
        </Slide>

        <Slide transition={["fade"]}>
          <Title>Update Angular</Title>
          <Code language="typescript">{`
          import {Component, Input} from '@angular/core';
 
          @Component({
            selector: 'app-component',
            templateUrl: './app.component.html'
          })
          export class AppComponent {
            private _attr: string;
          
            get attr() {
              return this._attr;
            }
            @Input('attr') set attr(value: string) {
              this._attr = value;
              // HERE
            }
          } 
          `}</Code>
        </Slide>

        <Slide transition={["fade"]}>
          <FlexBox align="center" style={{ height: "100%" }}>
            <Title>Ale ...</Title>
          </FlexBox>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <FlexBox align="center" style={{ height: "100%" }}>
            <Title color="quinary">Store</Title>
          </FlexBox>
        </Slide>

        <Slide transition={["fade"]}>
          <Title color="quinary">Redux</Title>
          <Code>{`
          import produce from "immer";

          export const reducer = (state = initialState, action) => {
            switch (action.type) {
              case "counter/incremented":
                return { ...state, value: state.value + 1 };
              case "counter/decrement":
                return produce(state, (draft) => {
                  draft.value--;
                });
              default:
                return state;
            }
          };          
          `}</Code>
        </Slide>

        <Slide transition={["fade"]}>
          <Title color="quinary">Redux</Title>
          <Code>{`
           import { createAction } from "@reduxjs/toolkit";

          export const increment = createAction("counter/increment");

          export const increment = (amount) => {
            return {
              type: INCREMENT,
              payload: amount,
            };
          };
        `}</Code>
        </Slide>

        <Slide transition={["fade"]}>
          <Title color="quinary">Redux</Title>
          <Code>{`
           import { createDraftSafeSelector, createSelector } from "@reduxjs/toolkit";

           export const selectSelf = (state) => state;
           export const unsafeSelector = createSelector(
             selectSelf,
             (state) => state.value
           );
           export const draftSafeSelector = createDraftSafeSelector(
             selectSelf,
             (state) => state.value
           );
        `}</Code>
        </Slide>

        <Slide transition={["fade"]}>
          <Title>Vuex</Title>
          <Code>{`
          import { createStore } from "vuex";

          const moduleA = {
            state: () => ({}),
            mutations: {},
            actions: {},
            getters: {},
          };
          
          export const store = createStore({
            modules: {
              a: moduleA,
            },
          });
          `}</Code>
        </Slide>

        <Slide transition={["fade"]}>
          <Title>Vuex</Title>
          <Code>{`
          export const actions = {
            actionA({ commit, dispatch, store }, payload) {
              commit("increment", payload);
              dispatch("actionB", store.data);
          
              return 42;
            },
          };
          `}</Code>
        </Slide>

        <Slide transition={["fade"]}>
          <Title>Vuex</Title>
          <Code>{`
            export const mutations = {
              increment(state, payload) {
                state.count += payload;
                Vue.set(state.arr, index, payload);
              },
            };
          `}</Code>
        </Slide>

        <Slide transition={["fade"]}>
          <Title>Vuex</Title>
          <Code>{`
          <script>
          import { mapActions, mapGetters } from "vuex";
          
          export default {
            computed: {
              ...mapGetters("module2", ["valueB2"])
            }
            methods: {
              ...mapActions("module1", ["actionA1"]),
              method() {
                const actionResult = this.actionA1(this.valueB2);
              },
            },
          };
          </script>
          
          `}</Code>
        </Slide>
        <Slide transition={["fade"]}>
          <Title>Vuex</Title>
          <Code>{`
          <script>
          import { mapMutations, mapState } from "vuex";
          
          export default {
            computed: {
              ...mapState("module2", "store2")
            }
            methods: {
              ...mapMuttions("module1", ["mutation"]),
              method() {
                this.mutation(this.valueFromGetter, this.store2);
              },
            },
          };
          </script>
          `}</Code>
        </Slide>

        <Slide transition={["fade"]}>
          <Title>NGRX</Title>
          <Code language="typescript">{`
          @Injectable()
          export class AppEffects {
            constructor(
              private actions$: Actions<AppActions>,
              private apiService: ApiService,
              private store$: Store<RootStore>,
            ) {}
          
            @Effect()
            data$ = this.actions$.pipe(
              ofType<Action>(AppAcions.Action),
              withLatestFrom(this.store$.select(selector)),
              switchMap(([payload, dataFromSelector]) => {
                return this.apiService
                  .fetch()
                  .pipe(map((response) => new OtherAction(response)),);
              }),
            );
          }
          `}</Code>
        </Slide>

        <Slide transition={["fade"]}>
          <Title>NGRX</Title>
          <Code language="typescript">{`
          @Component({
            template: \`
              <div *ngIf="isLoading$ | async">loading<div>
              <div *ngElse>{{ data$ | async }}<div>
            \`
          })
          export class AppComponent implements OnInit {
            isLoading$: Observable<boolean>;
            data$: Observable<Date>;
          
            constructor(private store$: Store<RootStore>) {}
          
            ngOnInit() {
              this.isLoading$ = this.store$.pipe(select(selectIsLoading));
              this.data$ = this.store$.pipe(select((store) => store.data));
          
             this.store$.dispatch(new Action());
            }
          
          }
          `}</Code>
        </Slide>

        <Slide transition={["fade"]}>
          <FlexBox align="center" style={{ height: "100%" }}>
            <Title>Wnioski</Title>
          </FlexBox>
        </Slide>

        <Slide transition={["fade"]}>
          <FlexBox align="center" style={{ height: "100%" }}>
            <Title>Unit testing</Title>
          </FlexBox>
        </Slide>

        <Slide transition={["fade"]}>
          <Title>Testy Vue</Title>
          <Code>{`
          import { shallowMount } from "@vue/test-utils";
          import Component from "./Component.vue";
          
          describe("Badge", () => {
            const createComponent = ({ label = "" } = {}) => {
              return shallowMount(Component, {
                propsData: {
                  label,
                },
                components: {
                  Child,
                },
              });
            };
          
            it.each(["test42", "wpłynąłem na suchego przestwór oceanu"])(
              "should render text from label props",
              (label) => {
                const component = createComponent({ label });
          
                expect(component.find(".label").text()).toContain(label);
              }
            );
          
            it("should render child with prop ", () => {
              const component = createComponent();
          
              expect(component.find("child-stub").props().attr).toBe(42);
            });
          });
          
          `}</Code>
        </Slide>

        <Slide transition={["fade"]}>
          <Title>Testy React</Title>
          <Code>{`
          import React from "react";
          import { shallow } from "enzyme";
          
          import Component from "./Component";
          import Child from "./Child";
          
          describe("<MyComponent />", () => {
            it("renders three <Child /> components", () => {
              const wrapper = shallow(<Component />);
              expect(wrapper.find(Child)).to.have.lengthOf(3);
            });
          
            it("renders a label, () => {
              const wrapper = shallow(<MyComponent />);
              expect(wrapper.find("label")).toContains("label");
            });
          });
          `}</Code>
        </Slide>

        <Slide transition={["fade"]}>
          <Title color="quinary">Testy Angular</Title>
          <Code language="typescript">{`
          import { TestBed, async } from '@angular/core/testing';
          import { AppComponent } from './app.component';
           
          describe('AppComponent', () => {
            beforeEach(async(() => {
              TestBed.configureTestingModule({
                declarations: [
                  AppComponent,
                ],
              }).compileComponents();
            }));
           
            it('should render title in a h1 tag', () => {
              const fixture = TestBed.createComponent(AppComponent);
              fixture.detectChanges();
              const compiled = fixture.debugElement.nativeElement;
              expect(compiled.querySelector('.label').textContent).toContain('label');
            });
          });
          `}</Code>
        </Slide>

        <Slide>
          <FlexBox align="center" style={{ height: "100%" }}>
            <Title>TypeScript</Title>
          </FlexBox>
        </Slide>

        <Slide transition={["fade"]}>
          <Title>Vue + TypeScript</Title>
          <Table>
            {/* <TableHeader>
              <TableRow>
                <TableCell>Temat</TableCell>
                <TableCell>Ocena</TableCell>
              </TableRow>
            </TableHeader> */}
            <TableBody>
              <TableRow>
                <TableCell>Wewnątrz komponentu</TableCell>
                <TableCell>Od 3.0</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Pomiędzy komponentemi</TableCell>
                <TableCell>Brak wsparcia</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>HTML</TableCell>
                <TableCell>Brak wsparcia</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Wewnątrz stora</TableCell>
                <TableCell>Niełatwo, ale się da</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>store {"<->"} component</TableCell>
                <TableCell>Tylko przez composition</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Slide>

        <Slide transition={["fade"]}>
          <Title bold style={{ marginBottom: "15vh" }}>
            Rozdział III
          </Title>
          <FlexBox
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <Text color="quinary">Use casy</Text>
          </FlexBox>
        </Slide>

        <Slide>
          <Title>Use casy</Title>
          <FlexBox
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <Appear>
              <Text color="quinary">Małe aplikacja</Text>
            </Appear>
            <Appear>
              <Text color="quinary">Wiele widoków, ale mało logiki </Text>
            </Appear>
            <Appear>
              <Text color="quinary">Niewielki zespół</Text>
            </Appear>
            <Appear>
              <Text color="quinary">PoC / Demo</Text>
            </Appear>
          </FlexBox>
        </Slide>

        <Slide>
          <FlexBox align="center" style={{ height: "100%" }}>
            <Title>Gdyby...</Title>
          </FlexBox>
        </Slide>

        <Slide>
          <FlexBox align="center" style={{ height: "100%" }}>
            <Image src={vue1} width="500" />
            <Image src={vue2} width="500" />
          </FlexBox>
        </Slide>

        <Slide>
          <FlexBox align="center" style={{ height: "100%" }}>
            <Image src={react} height="500" />
          </FlexBox>
        </Slide>

        <Slide>
          <FlexBox align="center" style={{ height: "100%" }}>
            <Image src={angular} height="500" />
          </FlexBox>
        </Slide>

        <Slide transition={["fade"]}>
          <Title bold style={{ marginBottom: "15vh" }}>
            Rozdział V
          </Title>
          <FlexBox
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <Text margin="10px 0 0" color="quinary">
              Czy warto uczyć się Vue?
            </Text>
          </FlexBox>
        </Slide>

        <Slide>
          <Title>Kiedy się warto uczyć Vue</Title>
          <FlexBox
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <Appear>
              <Text color="quinary" style={{ margin: "0", padding: "0" }}>
                Junior developer?
              </Text>
            </Appear>
            <Appear>
              <Text color="quinary" style={{ margin: "0", padding: "0" }}>
                Senior developer?
              </Text>
            </Appear>
            <Appear>
              <Text color="quinary" style={{ margin: "0", padding: "0" }}>
                Angular developer?
              </Text>
            </Appear>
            <Appear>
              <Text color="quinary" style={{ margin: "0", padding: "0" }}>
                Backend developer?
              </Text>
            </Appear>
          </FlexBox>
        </Slide>

        <Slide transition={["fade"]}>
          <Title>Czy warto uczyś się Vue w 2022 roku?</Title>
          <Appear>
            <Text color="quinary" style={{ margin: "0", padding: "0" }}>
              Raczej nie
            </Text>
          </Appear>
        </Slide>

        <Slide transition={["fade"]}>
          <Title>Dziękuję :*</Title>
        </Slide>
      </Deck>
    );
  }
}

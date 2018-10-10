import React from "react";
import {
  Deck,
  Heading,
  CodePane,
  ListItem,
  List,
  Table,
  TableHeaderItem,
  TableItem,
  TableRow,
  Link,
  TableBody,
  Image,
  Slide,
  Text
} from "spectacle";

import steam from "../assets/steam.png";
import abstract from "../assets/abstract.png";
import idea from "../assets/idea.png";
import graphql1 from "../assets/graphqp1.png";
import graph2 from "../assets/graph2.png";
import graphene from "../assets/graphene.png";
import espeo from "../assets/espeo.png";
// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quarternary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit lineHeight={1} size={3} textColor="secondary">
            Django i GraphQL
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={0.25} fit bold>
            https://przemyslawjanpietrzak.github.io/przemyslawjanpietrzak.github.io/django-graphql/dist
          </Text>
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Image src={espeo} height="200" />
          <br /> <br /> <br />
          <Text
            margin="10px 0 0"
            style={{ fontSize: "20px" }}
            textColor="tertiary"
            size={0.25}
            bold
          >
            https://github.com/przemyslawjanpietrzak/pyMonet
          </Text>
          <Text
            margin="10px 0 0"
            style={{ fontSize: "20px" }}
            textColor="tertiary"
            size={0.25}
            bold
          >
            https://twitter.com/przemyslawjanp
          </Text>
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            REST
          </Heading>

          <CodePane
            lang="python"
            theme="light"
            source={`async def request(url: URL, method: Methods, payload=None, **queryParams):
  db_side_effect(payload)
  return response
            `}
          />
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            Backend & Frontend
          </Heading>
          <Table>
            <TableBody>
              <TableRow>
                <TableItem>
                  <Image src={steam} height="500" />
                </TableItem>
                <TableItem>
                  <Image src={abstract} height="500" />
                </TableItem>
              </TableRow>
            </TableBody>
          </Table>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit lineHeight={1} size={3} textColor="secondary">
            The Dev Estimate - Munch, Edvard (1887)
          </Heading>
          <Image src={idea} height="500" />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit lineHeight={1} size={3} textColor="secondary">
            Graph Query Language
          </Heading>
          <Image src={graphql1} height="500" />
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            Query Syntax
          </Heading>
          <Table>
            <TableBody>
              <TableRow>
                <TableItem>
                  <CodePane
                    lang="graphql"
                    theme="light"
                    source={`{
  actor {
    firstName
    lastName
    birthDate
  }
}
                    `}
                  />
                </TableItem>
                <TableItem>
                  <CodePane
                    lang="json"
                    theme="light"
                    source={`{
  "actor": {
    "firstName": "Charles",
    "lastName": "Chaplin",
    "birthDate": "16.04.1889"
  }
}
                    `}
                  />
                </TableItem>
              </TableRow>
            </TableBody>
          </Table>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            Query Syntax #2
          </Heading>
          <Table>
            <TableBody>
              <TableRow>
                <TableItem>
                  <CodePane
                    lang="graphql"
                    theme="light"
                    source={`{
  actor {
    firstName
    birthDate
    growth
  }
}
                    `}
                  />
                </TableItem>
                <TableItem>
                  <CodePane
                    lang="json"
                    theme="light"
                    source={`{
  "actor": {
    "firstName": "Charles",
    "birthDate": "16.04.1889",
    "growth": 165
  }
}
                    `}
                  />
                </TableItem>
              </TableRow>
            </TableBody>
          </Table>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            Query Syntax #3
          </Heading>
          <Table>
            <TableBody>
              <TableRow>
                <TableItem>
                  <CodePane
                    lang="graphql"
                    theme="light"
                    source={`{
  actor {
    firstName
    lastName
    movies {
      name
      rating
    }
  }
}
                    `}
                  />
                </TableItem>
                <TableItem>
                  <CodePane
                    lang="json"
                    theme="light"
                    source={`{
  "actor": {
    "firstName": "Charles",
    "lastName": "Chaplin",
    "movies": [
      { "name": "The Great Dictator", rating: 8 },
      { "name": "Monsieur Verdoux", rating: 7.7 }
    ]
  }
}
                    `}
                  />
                </TableItem>
              </TableRow>
            </TableBody>
          </Table>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            Query Syntax #4
          </Heading>
          <Table>
            <TableBody>
              <TableRow>
                <TableItem>
                  <CodePane
                    lang="graphql"
                    theme="light"
                    source={`{
  actor {
    firstName
    lastName
    movies(name: "Limelight") {
      name
      director {
        name
      }
    }
  }
}
                    `}
                  />
                </TableItem>
                <TableItem>
                  <CodePane
                    lang="json"
                    theme="light"
                    source={`{
  "actor": {
    "firstName": "Charles",
    "lastName": "Chaplin",
    "movies": [
      { "name": "Limelight", "director": {
        "firstName": "Charles",
        "lastName": "Chaplin"
      } },
    ]
  }
}
                    `}
                  />
                </TableItem>
              </TableRow>
            </TableBody>
          </Table>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            Static typing
          </Heading>

          <Table>
            <TableBody>
              <TableRow>
                <TableItem>
                  <Image src={graph2} height="200" />
                </TableItem>
                <TableItem>
                  <CodePane
                    lang="graphql"
                    theme="light"
                    source={`type Movie {
  name: String
  rating: Float
  director: Director
}

type Actor {
  firstName: String
  lastName: String
  birthDate: Date
  movies: [Movie]
}`}
                  />
                </TableItem>
              </TableRow>
            </TableBody>
          </Table>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            Mutation
          </Heading>

          <CodePane
            lang="graphql"
            theme="light"
            source={`mutation UpdateActor($firstName: String!, $lastName: String!) {
  actor {
    firstName
    lastName
  }
}`}
          />
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            Lets do it
          </Heading>

          <Image src={graphene} height="200" />

          <CodePane
            lang="python"
            theme="light"
            source={`pip install graphene graphene-django`}
          />
          <hr />
          <CodePane
            lang="python"
            theme="light"
            source={`INSTALLED_APPS = (
    # ...
    'graphene_django',
)`}
          />
          <hr />
          <CodePane
            lang="python"
            theme="light"
            source={`from django.conf.urls import url
from graphene_django.views import GraphQLView

urlpatterns = [
    # ...
    url(r'^graphql', GraphQLView.as_view(graphiql=True, schema=schema)),
]`}
          />
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            Make graph great again
          </Heading>

          <CodePane
            lang="python"
            theme="light"
            source={`from graphene_django import DjangoObjectType
import graphene

class Actor(DjangoObjectType):
    class Meta:
        model = ActorModel

class Query(graphene.ObjectType):
    actors = graphene.List(Actor)
    actor = graphene.Field(Actor)

    def resolve_actors(self, info):
        return ActorModel.objects.all()

    def resolve_actor(self, info, **kwargs):
        id = kwargs.get('id')

        return ActorModel.objects.get(pk=id)

schema = graphene.Schema(query=Query)`}
          />
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            Access
          </Heading>

          <CodePane
            lang="python"
            theme="light"
            source={`from graphene_django import DjangoObjectType
import graphene

class Actor(DjangoObjectType):
    class Meta:
        model = ActorModel
        only_fields = ('firstName', 'lastName')
        # exclude_fields = ('pk',)
        interfaces = (relay.Node, )


      @classmethod
      def get_node(cls, id, info):
        if not info.context.user.is_authenticated():
          return None
        try:
            actor = cls._meta.model.objects.get(id=id)
        except cls._meta.model.DoesNotExist:
            return None

          `}
          />
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            Custom nodes
          </Heading>

          <CodePane
            lang="python"
            theme="light"
            source={`import graphene

class Query(graphene.ObjectType):
    hello = graphene.String(name=graphene.String(default_value="stranger"))

    def resolve_hello(self, info, name):
        return 'Hello ' + name`}
          />
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            Filter
          </Heading>

          <CodePane
            lang="python"
            theme="light"
            source={`class ActorNode(DjangoObjectType):
    class Meta:
        # Assume you have an Actor model defined with the following fields
        model = Actor
        filter_fields = ['firstName', 'lastName', 'birthDate']
        interfaces = (relay.Node, )


class ActorFilter(django_filters.FilterSet):
    name = django_filters.CharFilter(lookup_expr=['iexact'])

    class Meta:
        model = Actor
        fields = ['firstName', 'lastName', 'birthDate']


class Query(ObjectType):
    actor = relay.Node.Field(ActorNode)
    all_actors = DjangoFilterConnectionField(ActorNode, filterset_class=ActorFilter)`}
          />
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            Mutation node
          </Heading>

          <CodePane
            lang="python"
            theme="light"
            source={`from graphene_django.rest_framework.mutation import SerializerMutation

class ActorAwesomeMutation(SerializerMutation):
    class Meta:
        serializer_class = ActorSerializer`}
          />
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            Demo
          </Heading>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            Why?
          </Heading>
          <List>
            <ListItem style={{ fontSize: "21px" }}>Many changes</ListItem>
            <ListItem style={{ fontSize: "21px" }}>Elastic API</ListItem>
            <ListItem style={{ fontSize: "21px" }}>
              len(frontend_power) > len(backend_power)
            </ListItem>
            <ListItem style={{ fontSize: "21px" }}>
              Squash similar endpoint
            </ListItem>
            <ListItem style={{ fontSize: "21px" }}>Reduce http calls</ListItem>
            <ListItem style={{ fontSize: "21px" }}>CVDD</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            Why not?
          </Heading>
          <List>
            <ListItem style={{ fontSize: "21px" }}>
              GraphQL for GraphQL
            </ListItem>
            <ListItem style={{ fontSize: "21px" }}>
              {"len(frontend_power) < len(backend_power)"}
            </ListItem>
            <ListItem style={{ fontSize: "21px" }}>Native cache</ListItem>
            <ListItem style={{ fontSize: "21px" }}>Deadlines</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            Links
          </Heading>
          <List>
            <ListItem style={{ fontSize: "21px" }}>
              <a href="https://graphql.org/">GraphQL</a>
            </ListItem>
            <ListItem style={{ fontSize: "21px" }}>
              <a href="https://graphene-python.org/">Graphene</a>
            </ListItem>
            <ListItem style={{ fontSize: "21px" }}>
              <a href="http://docs.graphene-python.org/projects/django/en/latest/">
                Graphene-Django
              </a>
            </ListItem>

            <ListItem style={{ fontSize: "21px" }}>
              <a href="https://github.com/przemyslawjanpietrzak/pyMonet">
                pyMonet
              </a>
            </ListItem>

            <ListItem style={{ fontSize: "21px" }}>
              <a href="https://blog.quicktype.io/">quicktype</a>
            </ListItem>

            <ListItem style={{ fontSize: "21px" }}>
              <a href="https://github.com/graphql/graphiql">graphiql</a>
            </ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]}>
          <Heading size={6} textColor="secondary">
            Thank you :*
          </Heading>
        </Slide>
      </Deck>
    );
  }
}

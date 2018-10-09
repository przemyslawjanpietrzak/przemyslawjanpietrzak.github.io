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
import graphene  from '../assets/graphene.png';
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
          <Heading
            size={1}
            fit
          
            lineHeight={1}
            size={3}
            textColor="secondary"
          >
            Django i GraphQL
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={0.25} fit bold>
            https://przemyslawjanpietrzak.github.io/przemyslawjanpietrzak.github.io/elm/django-graphql
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
          <Heading
            size={1}
            fit
          
            lineHeight={1}
            size={3}
            textColor="secondary"
          >
            The Dev Estimate - Munch, Edvard (1887)
          </Heading>
          <Image src={idea} height="500" />
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading
            size={1}
            fit
          
            lineHeight={1}
            size={3}
            textColor="secondary"
          >
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
<hr/>
          <CodePane
            lang="python"
            theme="light"
            source={`INSTALLED_APPS = (
    # ...
    'graphene_django',
)`}
          />
          <hr/>
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
          <Heading size={6} textColor="secondary" >
            Make graph
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
          <Heading size={6} textColor="secondary" >
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

          `}/>
        </Slide>



      </Deck>
    );
  }
}

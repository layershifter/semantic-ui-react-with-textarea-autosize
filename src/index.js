import React from "react";
import ReactDOM from "react-dom";
import TextareaAutosize from "react-textarea-autosize";
import {
  Divider,
  Container,
  Form,
  Header,
  Message,
  Segment,
  TextArea
} from "semantic-ui-react";

class App extends React.Component {
  state = { value: "" };

  render() {
    return (
      <Container>
        <Divider hidden />
        <Message info>
          <Message.Header>
            Usage with <code>react-textarea-autosize</code>
          </Message.Header>
          <Message.Content>
            This CodeSandbox replicates usage examples{" "}
            <a href="https://andreypopp.github.io/react-textarea-autosize/">
              react-textarea-autosize
            </a>{" "}
            and shows how you can use it with Semantic UI React.
          </Message.Content>
        </Message>
        <Segment.Group>
          <Segment as={Form}>
            <Header as="h3">
              Textarea with <code>maxRows</code> and <code>minRows</code>
            </Header>
            <TextArea
              as={TextareaAutosize}
              minRows={3}
              maxRows={6}
              defaultValue="Just a single line..."
            />
          </Segment>
          <Segment as={Form}>
            <Header as="h3">
              Textarea with <code>maxRows</code> and <code>minRows</code> (
              <code>box-sizing: border-box</code>)
            </Header>
            <TextArea
              as={TextareaAutosize}
              defaultValue="Just a single line..."
              minRows={3}
              maxRows={6}
              style={{ boxSizing: "border-box" }}
            />
          </Segment>
          <Segment as={Form}>
            <Header as="h3">
              Textarea with <code>maxRows</code>
            </Header>
            <TextareaAutosize
              defaultValue="Just a single line..."
              maxRows={5}
            />
          </Segment>
          <Segment as={Form}>
            <Header as="h3">
              Textarea with <code>maxHeight</code>
            </Header>
            <TextArea
              as={TextareaAutosize}
              defaultValue="Just a single line..."
              style={{ maxHeight: 300 }}
            />
          </Segment>
          <Segment as={Form}>
            <Header as="h3">
              Component with <code>rows</code> set
            </Header>
            <TextArea
              as={TextareaAutosize}
              defaultValue="Just a single line..."
              rows={4}
            />
          </Segment>
          <Segment>
            <Header as="h3">
              Controlled mode with <code>{`<Form />`}</code>
            </Header>
            <Form>
              <Form.Field>
                <TextArea
                  as={TextareaAutosize}
                  label="About"
                  placeholder="Tell us more about you..."
                  onChange={(e, data) => this.setState({ value: data.value })}
                  useCacheForDOMMeasurements
                  value={this.state.value}
                />
              </Form.Field>
              <Form.Button
                content="Clear"
                onClick={() => this.setState({ value: "" })}
              />
            </Form>
          </Segment>
          <Segment as={Form}>
            <Header as="h3">Receive message on height change</Header>

            <TextArea
              as={TextareaAutosize}
              defaultValue="Just a single line..."
              onHeightChange={(height, instance) =>
                console.log(height, instance.rowCount)
              }
              useCacheForDOMMeasurements
            />
          </Segment>
        </Segment.Group>
      </Container>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

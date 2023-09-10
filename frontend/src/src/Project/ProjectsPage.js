import React from "react";
import { Container, Image, Header, Card } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Grid, Icon } from "semantic-ui-react";
import SearchBar from "../Components/SearchBar";

function ProjectsPage() {
  const projects = [
    {
      id: 1,
      name: "Project A",
      description: "Description for Project A",
      likes: 15,
    },
    {
      id: 2,
      name: "Project B",
      description: "Description for Project B",
      likes: 15,
    },
    {
      id: 3,
      name: "Project C",
      description: "Description for Project C",
      likes: 15,
    },
    {
      id: 4,
      name: "Project C",
      description: "Description for Project C",
      likes: 15,
    },
    {
      id: 5,
      name: "Project C",
      description: "Description for Project C",
      likes: 15,
    },
    {
      id: 6,
      name: "Project C",
      description: "Description for Project C",
      likes: 15,
    },
    {
      id: 7,
      name: "Project C",
      description: "Description for Project C",
      likes: 15,
    },
    {
      id: 8,
      name: "Project C",
      description: "Description for Project C",
      likes: 15,
    },
  ];

  return (
    <Container>
      <Header
        as="h1"
        style={{ textAlign: "left", fontSize: "3em", paddingTop: "20px" }}
      >
        Search Projects
      </Header>
      <p style={{ textAlign: "left", fontSize: "20px" }}>
        Discover people, fundraisers, locations, and keywords
      </p>

      <SearchBar />

      <Grid doubling columns={3} style={{ textAlign: "left" }}>
        {projects.map((project) => (
          <Grid.Column key={project.id}>
            <Link
              to={`/projects/${project.id}`}
              style={{ color: "black", textDecoration: "none" }}
            >
              <Card>
                <Image src="/images/image.png" wrapped ui={false} />
                <Card.Content>
                  <Card.Header>{project.name}</Card.Header>
                  <Card.Meta>
                    <span className="date">Due March 2023</span>
                  </Card.Meta>
                  <Card.Description>{project.description}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name="heart" />
                    {project.likes} Likes
                  </a>
                </Card.Content>
              </Card>
              {/* <Segment style={{ width: '100%', backgroundColor: '#F5F5F5', marginBottom: '8px', padding: '15px', textAlign: 'center' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <TempImage/>
                                <strong style={{ marginBottom: '10px', marginTop: '20px'}}>{project.name}</strong>
                                <p>{project.description}</p>
                            </div>
                        </Segment> */}
            </Link>
          </Grid.Column>
        ))}
      </Grid>
    </Container>
  );
}

export default ProjectsPage;
